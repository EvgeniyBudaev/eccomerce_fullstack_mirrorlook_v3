from rest_framework import viewsets

from store.models import Mirror, Console
from store.service import PaginationStore
from .serializers import MirrorSerializer, ConsoleSerializer


class MirrorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Mirror.objects.all()
    serializer_class = MirrorSerializer
    pagination_class = PaginationStore
    lookup_field = 'product_slug'


class ConsoleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Console.objects.all()
    serializer_class = ConsoleSerializer
    pagination_class = PaginationStore
    lookup_field = 'product_slug'
