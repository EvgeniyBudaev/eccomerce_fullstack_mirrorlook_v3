from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend

from store.models import User, Product
from accounts.serializers import UserSerializer
from .serializers import ProductSerializer, ProductCreateSerializer
from .pagination import StorePagination
# from .filters import MirrorFilter

# from .permissions import IsAdminOrReadOnly, IsAuthorOrReadOnly, ReadOnly
from .permissions import IsAdminOrReadOnly


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ProductViewSet(viewsets.ModelViewSet):
    """API для работы с моделью продуктов."""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (IsAdminOrReadOnly,)
    pagination_class = StorePagination
    lookup_field = 'product_slug'
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    # filterset_class = MirrorFilter
    ordering_fields = ('price',)
    ordering = ('price',)

    def get_serializer_class(self):
        if self.action in ('create', 'partial_update'):
            return ProductCreateSerializer
        return ProductSerializer

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)
    #
    # def get_permissions(self):
    #     if self.action == 'retrieve':
    #         return (ReadOnly(),)
    #
    #     return super().get_permissions()
