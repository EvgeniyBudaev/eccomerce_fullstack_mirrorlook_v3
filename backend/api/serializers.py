from rest_framework import serializers

from store.models import (Mirror, Console, Catalog, Category, CartProduct, Cart)


class CatalogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Catalog
        fields = ('id', 'title')


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'title')


class MirrorSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(source='category.title',
                                              many=False, read_only=True)
    catalog_slug = serializers.SerializerMethodField()

    class Meta:
        model = Mirror
        fields = ('id', 'title', 'product_slug', 'image', 'product_photo1',
                  'product_photo2', 'product_photo3', 'product_photo4', 'price',
                  'count_in_stock', 'description', 'rating', 'created', 'form',
                  'brand', 'weight', 'mirror_material', 'frame_material',
                  'frame_color', 'height_with_frame', 'width_with_frame',
                  'height_without_frame', 'width_without_frame', 'is_faced',
                  'user', 'category', 'catalog_slug')
        lookup_field = 'product_slug'

    def get_catalog_slug(self, obj):
        return obj.category.catalog.catalog_slug


class ConsoleSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(source='category.title',
                                              many=False, read_only=True)
    catalog_slug = serializers.SerializerMethodField()

    class Meta:
        model = Console
        fields = ('id', 'title', 'product_slug', 'image', 'product_photo1',
                  'product_photo2', 'product_photo3', 'product_photo4', 'price',
                  'count_in_stock', 'description', 'rating', 'created', 'color',
                  'brand', 'weight', 'user', 'category', 'catalog_slug')
        lookup_field = 'product_slug'

    def get_catalog_slug(self, obj):
        return obj.category.catalog.catalog_slug


class CartProductSerializer(serializers.ModelSerializer):
    pass


class CartSerializer(serializers.ModelSerializer):
    pass
