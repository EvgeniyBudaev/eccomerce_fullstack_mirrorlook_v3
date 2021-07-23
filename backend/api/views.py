from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from store.models import Mirror, Console
from .serializers import MirrorSerializer, ConsoleSerializer
from .pagination import StorePagination
from .filters import ProductMultipleFilterBackend, MirrorFilter


class MirrorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Mirror.objects.all()
    serializer_class = MirrorSerializer
    pagination_class = StorePagination
    lookup_field = 'product_slug'
    filter_backends = (DjangoFilterBackend,)
    filterset_class = MirrorFilter


class ConsoleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Console.objects.all()
    serializer_class = ConsoleSerializer
    pagination_class = StorePagination
    lookup_field = 'product_slug'
