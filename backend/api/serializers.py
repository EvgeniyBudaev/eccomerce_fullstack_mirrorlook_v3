from rest_framework import serializers

from store.models import (Catalog, Category, Attribute, Product,
                          ProductAttribute)


class CatalogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Catalog
        fields = ('id', 'title')


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'title')


class AttributeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Attribute
        fields = ('id', 'form', 'mirror_material', 'frame_material',
                  'frame_color', 'height_with_frame', 'width_with_frame',
                  'height_without_frame', 'width_without_frame', 'weight',
                  'is_faced')


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(source='category.title',
                                              many=False, read_only=True)
    catalog_slug = serializers.SerializerMethodField()
    attributes = AttributeSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'title', 'product_slug', 'brand', 'image',
                  'product_photo1', 'product_photo2', 'product_photo3',
                  'product_photo4', 'price', 'count_in_stock', 'description',
                  'rating', 'date_created', 'user', 'category', 'catalog_slug',
                  'attributes')
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

    def update(self, instance, validated_data):
        if 'attributes' not in self.initial_data:
            instance = self._update_attributes(instance, **validated_data)
            return instance
        else:
            attributes = validated_data.pop('attributes')
            instance = self._update_attributes(instance, **validated_data)
            for attribute in attributes:
                current_attribute, status = Attribute.objects.get_or_update(
                    **attribute)
                instance = self._update_attributes(instance, **attribute)

                ProductAttribute.objects.update(
                    attribute=current_attribute, product=instance)
            return instance


# class CartProductSerializer(serializers.ModelSerializer):
#     pass


# class CartSerializer(serializers.ModelSerializer):
#     pass
