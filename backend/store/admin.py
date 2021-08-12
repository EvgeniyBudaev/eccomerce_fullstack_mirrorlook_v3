from django.contrib import admin

from .models import (Catalog, Category, Mirror, Console, Cart, CartProduct,
                     Review, Order, OrderItem, ShippingAddress)


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


class MirrorAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title')
    search_fields = ('title',)
    list_filter = ('title',)
    empty_value_display = '-пусто-'


class ConsoleAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title')
    search_fields = ('title',)
    list_filter = ('title',)
    empty_value_display = '-пусто-'


class CartProductAdmin(admin.ModelAdmin):
    list_display = ('pk', 'qty', 'final_price')
    search_fields = ('final_price',)
    list_filter = ('final_price',)
    empty_value_display = '-пусто-'


class CartAdmin(admin.ModelAdmin):
    list_display = ('pk', 'owner', 'total_products', 'final_price', 'in_order',
                    'for_anonymous_user')
    search_fields = ('final_price',)
    list_filter = ('final_price',)
    empty_value_display = '-пусто-'


admin.site.register(Catalog, CatalogAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Mirror, MirrorAdmin)
admin.site.register(Console, ConsoleAdmin)
admin.site.register(CartProduct, CartProductAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
