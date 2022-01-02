from django.contrib import admin

from .models import (Attribute, Cart, CartItem, Catalog, Category, Comment,
                     Order, OrderItem, OrderUser, Product, ProductAttribute,
                     Review, ShippingAddress)


class AttributeAdmin(admin.ModelAdmin):
    list_display = ('pk', 'form')
    search_fields = ('form',)
    list_filter = ('form',)
    empty_value_display = '-пусто-'


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


class OrderUserInline(admin.TabularInline):
    model = OrderUser
    fk_name = 'order'
    extra = 1


class OrderAdmin(admin.ModelAdmin):
    list_display = ('pk', 'user', 'date_created', 'date_updated')
    search_fields = ('date_created',)
    list_filter = ('date_created',)
    inlines = [OderItemInline, ShippingAddressInline, OrderUserInline]
    empty_value_display = '-пусто-'


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('pk', 'date_created')
    search_fields = ('date_created',)
    list_filter = ('date_created',)
    empty_value_display = '-пусто-'


class CommentAdmin(admin.ModelAdmin):
    list_display = ('pk', 'author',)
    search_fields = ('author',)
    list_filter = ('author',)
    empty_value_display = '-пусто-'


admin.site.register(Catalog, CatalogAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Attribute, AttributeAdmin)
admin.site.register(ProductAttribute, ProductAttributeAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Comment, CommentAdmin)
