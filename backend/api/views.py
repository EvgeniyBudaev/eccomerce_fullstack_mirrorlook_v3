from django.contrib.auth import get_user_model
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters, status, response
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
# Отправка сообщений на email
from django.core import mail
from django.core.mail import send_mail, BadHeaderError
from django.core.mail import get_connection

from store.models import (User, Catalog, Product, CartItem, Cart, Order,
                          OrderItem, ShippingAddress)
from accounts.serializers import UserSerializer
from .serializers import (CatalogSerializer, ProductSerializer,
                          ProductCreateSerializer, CartItemSerializer,
                          CartSerializer, OrderSerializer, OrderItemSerializer,
                          ShippingAddressSerializer)
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
    filterset_fields = ['cart']


class OrderViewSet(viewsets.ModelViewSet):
    """API для работы с моделью заказа."""
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (AllowAny,)


class OrderItemViewSet(viewsets.ModelViewSet):
    """API для работы с моделью продукта заказа."""
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
    permission_classes = (AllowAny,)


class ShippingAddressViewSet(viewsets.ModelViewSet):
    """API для работы с моделью доставки."""
    queryset = ShippingAddress.objects.all()
    serializer_class = ShippingAddressSerializer
    permission_classes = (AllowAny,)


@api_view(['POST'])
@permission_classes([AllowAny])
def sending_confirm_order(request):
    data = request.data
    subject = data["subject"]
    message = data["message"]
    customer_email = data["customer_email"]
    store_email = "budaev.e@gmail.com"

    conn_params = dict(
        host="smtp.gmail.com",
        port=465,
        username="budaev.e@gmail.com",
        password=""
    )

    email_params = dict(
        subject=subject,
        body=message,
        from_email=store_email,
        to=[store_email, customer_email]
    )

    if subject and message and customer_email and store_email:
        try:
            with get_connection(**conn_params) as connection:
                message = mail.EmailMessage(**email_params,
                                            connection=connection)
                message.send(fail_silently=False)
            return Response("Заказ успешно оформлен!")
        except BadHeaderError:
            message = {
                'detail': 'Обнаружен недопустимый заголовок.'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
    else:
        message = {
            'detail': 'Убедитесь, что все поля введены и действительны.'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
