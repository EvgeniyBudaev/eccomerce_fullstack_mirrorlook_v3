from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend

from store.models import User, Mirror, Console
from accounts.serializers import UserSerializer
from .serializers import MirrorSerializer, ConsoleSerializer
from .pagination import StorePagination
from .filters import MirrorFilter


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class MirrorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Mirror.objects.all()
    serializer_class = MirrorSerializer
    pagination_class = StorePagination
    lookup_field = 'product_slug'
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)
    filterset_class = MirrorFilter
    ordering_fields = ('price',)
    ordering = ('price',)


class ConsoleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Console.objects.all()
    serializer_class = ConsoleSerializer
    pagination_class = StorePagination
    lookup_field = 'product_slug'
