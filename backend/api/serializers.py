from rest_framework import serializers

from store.models import (Catalog, Category, Attribute, Product,
                          ProductAttribute, CartItem, Cart)


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
    attributes = AttributeSerializer(many=True, read_only=True)

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
            product = Product.objects.create(**validated_data)
            return product
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

    class Meta:
        model = Catalog
        fields = ('id', 'title', 'image', 'catalog_slug', 'date_created',
                  'categories', 'products')


class CartItemSerializer(serializers.ModelSerializer):
    # product = ProductSerializer(many=False, read_only=True)

    class Meta:
        model = CartItem
        fields = ('id', 'cart', 'product', 'quantity', 'date_created')


class CartSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cart
        fields = ('id', 'user', 'date_created')
