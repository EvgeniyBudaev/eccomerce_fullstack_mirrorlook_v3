from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (CartItemViewSet, CartViewSet, CatalogViewSet,
                    OrderItemViewSet, OrderViewSet, ProductViewSet,
                    ReviewViewSet, CommentViewSet, ShippingAddressViewSet,
                    sending_confirm_order)

router = DefaultRouter()
router.register('catalog', CatalogViewSet, basename='catalog')
router.register('products', ProductViewSet, basename='products')
router.register('cart', CartViewSet, basename='cart')
router.register('cart-products', CartItemViewSet, basename='cart-products')

router.register('order', OrderViewSet, basename='order')
router.register('order-items', OrderItemViewSet, basename='order-items')
router.register('shipping-address', ShippingAddressViewSet,
                basename='shipping-address')

router.register('reviews', ReviewViewSet, basename='reviews')
router.register('comments', CommentViewSet, basename='comments')

urlpatterns = [
    path('v1/', include(router.urls)),
    path('v1/auth/', include('djoser.urls')),
    path('v1/auth/', include('djoser.urls.jwt')),
    path("v1/sending-confirm-order/", sending_confirm_order,
         name="sending_confirm_order"),
]
