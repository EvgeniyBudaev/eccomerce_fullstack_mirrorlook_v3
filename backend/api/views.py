from django.contrib.auth import get_user_model
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters, response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny

from store.models import User, Catalog, Product, CartItem, Cart
from accounts.serializers import UserSerializer
from .serializers import (CatalogSerializer, ProductSerializer,
                          ProductCreateSerializer, CartItemSerializer,
                          CartSerializer)
from .pagination import StorePagination
from .filters import CatalogFilter, ProductFilter
from .permissions import IsAdminOrReadOnly


User = get_user_model()


# class UserViewSet(viewsets.ReadOnlyModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


class CatalogViewSet(viewsets.ModelViewSet):
    """API для работы с моделью каталога."""
    queryset = Catalog.objects.all()
    serializer_class = CatalogSerializer
    permission_classes = (IsAdminOrReadOnly,)
    lookup_field = 'catalog_slug'
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CatalogFilter


class ProductViewSet(viewsets.ModelViewSet):
    """API для работы с моделью продуктов."""
    queryset = Product.objects.all()
    serializer_class = None
    permission_classes = (IsAdminOrReadOnly,)
    pagination_class = StorePagination
    lookup_field = 'product_slug'
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filterset_class = ProductFilter
    ordering_fields = ('price',)
    ordering = ('price',)

    def get_serializer_class(self):
        if self.action in ('create', 'partial_update'):
            return ProductCreateSerializer
        return ProductSerializer


class CartViewSet(viewsets.ModelViewSet):
    """API для работы с моделью корзины."""
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = (AllowAny,)
    filter_backends = (DjangoFilterBackend,)


class CartItemViewSet(viewsets.ModelViewSet):
    """API для работы с моделью продукта корзины."""
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
    permission_classes = (AllowAny,)
    filter_backends = (DjangoFilterBackend,)
