from django.contrib.auth import get_user_model
from django.db.models import Avg
from rest_framework import serializers
from api.fields import Base64ImageField
from store.models import (Attribute, Cart, CartItem, Catalog, Category,
                          Comment, Order, OrderItem, OrderUser, Product,
                          ProductAttribute, Review,
                          ShippingAddress)

User = get_user_model()


class AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attribute
        fields = ('id', 'form', 'mirror_material', 'frame_material',
                  'frame_color', 'height_with_frame', 'width_with_frame',
                  'height_without_frame', 'width_without_frame', 'weight',
                  'is_faced')


class ProductSerializer(serializers.ModelSerializer):
    catalog = serializers.StringRelatedField(source='catalog.title',
                                             many=False, read_only=True)
    category = serializers.StringRelatedField(source='category.title',
                                              many=False, read_only=True)
    catalog_slug = serializers.SerializerMethodField()
    image = Base64ImageField()
    attributes = AttributeSerializer(many=True, read_only=True)
    rating = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id', 'title', 'product_slug', 'brand', 'image',
                  'product_photo1', 'product_photo2', 'product_photo3',
                  'product_photo4', 'price', 'count_in_stock', 'description',
                  'rating', 'date_created', 'user', 'catalog', 'category',
                  'catalog_slug', 'attributes')
        read_only_fields = ('id',)
        lookup_field = 'product_slug'

    def get_catalog_slug(self, obj):
        return obj.category.catalog.catalog_slug

    def get_rating(self, obj):
        return obj.reviews.aggregate(Avg('rating'))['rating__avg']


class ProductCreateSerializer(serializers.ModelSerializer):
    catalog_slug = serializers.SerializerMethodField()
    attributes = AttributeSerializer(many=True, required=False)

    class Meta:
        model = Product
        fields = ('id', 'title', 'product_slug', 'brand', 'image',
                  'product_photo1', 'product_photo2', 'product_photo3',
                  'product_photo4', 'price', 'count_in_stock', 'description',
                  'rating', 'date_created', 'user', 'category', 'catalog_slug',
                  'attributes')
        lookup_field = 'product_slug'

    def get_catalog_slug(self, obj):
        return obj.category.catalog.catalog_slug

    def create(self, validated_data):
        validated_data['catalog'] = validated_data['category'].catalog
        # Если в исходном запросе не было поля attributes
        if 'attributes' not in self.initial_data:
            # То создаём запись о продукте без его атрибутов
            return Product.objects.create(**validated_data)
        else:
            attributes = validated_data.pop('attributes')
            # Иначе сначала добавляем продукт в БД
            product = Product.objects.create(**validated_data)
            # А потом добавляем атрибуты продукта в БД
            for attribute in attributes:
                current_attribute, status = Attribute.objects.get_or_create(
                    **attribute)
                # И связываем каждый атрибут с этим продуктом
                ProductAttribute.objects.create(
                    attribute=current_attribute, product=product)
            return product


class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'title', 'products')


class CatalogSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    categories = CategorySerializer(many=True, read_only=True)
    image = Base64ImageField()

    class Meta:
        model = Catalog
        fields = ('id', 'title', 'image', 'catalog_slug', 'date_created',
                  'categories', 'products')


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ('id', 'cart', 'product', 'quantity', 'date_created',
                  'date_updated')

    def to_representation(self, instance):
        self.fields['product'] = ProductSerializer(read_only=True)
        return super(CartItemSerializer, self).to_representation(instance)

    def get_product__description(self, obj):
        return obj.product.description


class CartSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cart
        fields = ('id', 'user', 'date_created', 'date_updated')


class ShippingAddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShippingAddress
        fields = ('id', 'order', 'address', 'apartment', 'floor', 'entrance',
                  'intercom', 'postal_code', 'shipping_price', 'comment')
        extra_kwargs = {
            'order': {'write_only': True},
        }


class OrderItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderItem
        fields = ('id', 'order', 'product', 'title', 'quantity', 'price',
                  'image')
        extra_kwargs = {
            'order': {'write_only': True},
        }


class OrderUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderUser
        fields = ('id', 'order', 'first_name', 'last_name', 'email',
                  'phone_number',)
        extra_kwargs = {
            'order': {'write_only': True},
        }


class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(read_only=False, many=True)
    shipping_address = ShippingAddressSerializer(read_only=False, many=False)
    order_user = OrderUserSerializer(required=False)

    class Meta:
        model = Order
        fields = ('id', 'user', 'payment_method', 'tax_price',
                  'shipping_price', 'total_price', 'is_paid', 'paid_at',
                  'is_delivered', 'date_created', 'date_updated',
                  'order_items', 'shipping_address', 'order_user')

    def create(self, validated_data):

        order_user_data = validated_data.pop('order_user')
        order_user = None
        if order_user_data:
            order_user = OrderUserSerializer(data=order_user_data)
            if order_user.is_valid():
                order_user = order_user.save()
            else:
                raise TypeError('Не удалось сохранить `order_user`. Проверьте '
                                'правильность введённых данных.')

        items_data = validated_data.pop('order_items', [])
        address_data = validated_data.pop('shipping_address', {})

        # Создаем детали заказа.
        items = []
        for item_data in items_data:
            item = OrderItem.objects.create(**item_data)
            items.append(item)

        instance = super(OrderSerializer, self).create(validated_data)

        if order_user:
            order_user.order = instance
            order_user.save()

        # Создаем объект адреса доставки и соединяем с новым заказом.
        address, _ = ShippingAddress.objects.get_or_create(order=instance,
                                                           ** address_data)

        # Соединяем детали заказа с самим только что созданным заказом.
        for item in items:
            item.order = instance
            item.save()

        return instance

    def update(self, instance, validated_data):
        fields_to_filter = ('product', 'title')
        fields_to_update = ('quantity', 'price')

        address_data = validated_data.pop('shipping_address', {})
        address, _ = ShippingAddress.objects.get_or_create(order=self.instance,
                                                           **address_data)

        # Тут логика обновления деталей заказа.
        # Пример кода ниже обновляет кол-во и цену детали заказа
        # (fields_to_update),
        # если она найдена по связке заказ + продукт + название
        # (поля из fields_to_filter + order).
        # Если не найдена, то создается новая деталь заказа.
        items = []
        for item_data in validated_data.pop('order_items', []):
            item_kwargs = {f: item_data[f] for f in fields_to_filter if f
                           in item_data}
            item = OrderItem.objects.filter(order=self.instance,
                                            **item_kwargs).first()
            # Если такой детали заказа нет, то мы ее создаем.
            if item is None:
                item = OrderItem.objects.create(order=self.instance,
                                                **item_data)
            # Если есть, то обновляем поля
            else:
                fields = set(item_data.keys()).intersection(
                    set(fields_to_update))
                for f in fields:
                    setattr(item, f, item_data[f])
                if fields:
                    item.save()
            items.append(item)

        order_user_data = validated_data.pop('order_user', {})
        if order_user_data:
            if getattr(self.instance, 'order_user', None):
                for name, value in order_user_data.items():
                    setattr(self.instance.order_user, name, value)
                self.instance.order_user.save()
            else:
                OrderUser.objects.create(order=self.instance,
                                         **order_user_data)

        return super(OrderSerializer, self).update(instance, validated_data)


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'phone_number')


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ('id', 'product', 'advantage', 'author', 'commentary',
                  'disadvantage', 'rating', 'date_created', 'date_updated')

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['product'] = ProductSerializer(Product.objects.get(pk=data['product'])).data
        data['author'] = UserSerializer(User.objects.get(pk=data['author'])).data
        return data


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('id', 'commentary', 'review', 'author', 'date_created', 'date_updated')

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['author'] = UserSerializer(User.objects.get(pk=data['author'])).data
        data['review'] = ReviewSerializer(Review.objects.get(pk=data['review'])).data
        return data
