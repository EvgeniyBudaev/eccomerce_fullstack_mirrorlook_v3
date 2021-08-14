from django.contrib import admin

from .models import (Catalog, Category, Product, Attribute, ProductAttribute,
                     CartItem, Cart)


class CatalogAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'catalog_slug')
    search_fields = ('title',)
    list_filter = ('title',)
    empty_value_display = '-пусто-'


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'category_slug')
    search_fields = ('title',)
    list_filter = ('title',)
    empty_value_display = '-пусто-'


class ProductAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title')
    search_fields = ('title',)
    list_filter = ('title',)
    empty_value_display = '-пусто-'


class AttributeAdmin(admin.ModelAdmin):
    list_display = ('pk', 'form')
    search_fields = ('form',)
    list_filter = ('form',)
    empty_value_display = '-пусто-'


class ProductAttributeAdmin(admin.ModelAdmin):
    list_display = ('pk', 'attribute', 'product')
    empty_value_display = '-пусто-'


class CartItemAdmin(admin.ModelAdmin):
    list_display = ('pk', 'product', 'quantity', 'date_created')
    search_fields = ('date_created',)
    list_filter = ('date_created',)
    empty_value_display = '-пусто-'


class CartAdmin(admin.ModelAdmin):
    list_display = ('pk', 'user', 'date_created')
    search_fields = ('date_created',)
    list_filter = ('date_created',)
    empty_value_display = '-пусто-'


admin.site.register(Catalog, CatalogAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Attribute, AttributeAdmin)
admin.site.register(ProductAttribute, ProductAttributeAdmin)
admin.site.register(CartItem, CartItemAdmin)
admin.site.register(Cart, CartAdmin)
# admin.site.register(Review)
# admin.site.register(Order)
# admin.site.register(OrderItem)
# admin.site.register(ShippingAddress)
