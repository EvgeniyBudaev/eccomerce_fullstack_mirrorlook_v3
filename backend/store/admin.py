from django.contrib import admin

from .models import Catalog, Category, Mirror, Review, Order, OrderItem, ShippingAddress

admin.site.register(Catalog)
admin.site.register(Category)
admin.site.register(Mirror)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
