from django.contrib import admin

from .models import (Catalog, Category, Product, Attribute, ProductAttribute,
                     CartItem, Cart, Order, OrderItem, ShippingAddress)


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


class CartItemInline(admin.TabularInline):
    model = CartItem
    fk_name = 'cart'
    extra = 1


class CartAdmin(admin.ModelAdmin):
    list_display = ('pk', 'user', 'date_created', 'date_updated')
    search_fields = ('date_created',)
    list_filter = ('date_created',)
    inlines = [CartItemInline]
    empty_value_display = '-пусто-'


class ShippingAddressInline(admin.TabularInline):
    model = ShippingAddress
    fk_name = 'order'
    extra = 2


class OderItemInline(admin.TabularInline):
    model = OrderItem
    fk_name = 'order'
    extra = 1


class OrderAdmin(admin.ModelAdmin):
    list_display = ('pk', 'user', 'date_created', 'date_updated')
    search_fields = ('date_created',)
    list_filter = ('date_created',)
    inlines = [OderItemInline, ShippingAddressInline]
    empty_value_display = '-пусто-'


admin.site.register(Catalog, CatalogAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Attribute, AttributeAdmin)
admin.site.register(ProductAttribute, ProductAttributeAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(Order, OrderAdmin)
# admin.site.register(Review)
