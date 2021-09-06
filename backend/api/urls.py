from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (CatalogViewSet, ProductViewSet, CartItemViewSet,
                    CartViewSet, OrderViewSet, OrderItemViewSet,
                    ShippingAddressViewSet)

router = DefaultRouter()
router.register('catalog', CatalogViewSet, basename='catalog')
router.register('products', ProductViewSet, basename='products')
router.register('cart', CartViewSet, basename='cart')
router.register('cart-products', CartItemViewSet, basename='cart-products')

router.register('order', OrderViewSet, basename='order')
router.register('order-items', OrderItemViewSet, basename='order-items')
router.register('shipping-address', ShippingAddressViewSet,
                basename='shipping-address')

urlpatterns = [
    path('v1/', include(router.urls)),
    path('v1/auth/', include('djoser.urls')),
    path('v1/auth/', include('djoser.urls.jwt'))
]
