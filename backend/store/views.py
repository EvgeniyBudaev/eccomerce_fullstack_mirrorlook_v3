from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Mirror
from .serializers import MirrorSerializer


@api_view(['GET'])
def get_products_by_catalog(request, catalog_slug):
    """В звисимости от url каталога получаем соответствующие продукты."""
    records_on_page = 10
    serializer_classes = {'mirrors': MirrorSerializer}
    items_classes = {'mirrors': Mirror}
    query = request.query_params.get('searchValue', '')
    page = request.query_params.get('page')

    # Получаем все сущности нужного каталога, сохраняем их количество.
    items_class = items_classes.get(catalog_slug)
    items = items_class.objects.filter(
        catalog_id__catalog_slug__in=[catalog_slug])

    # Фильтруем items и разбиваем на страницы.
    items = items.filter(title__icontains=query)
    paginator = Paginator(items, records_on_page)

    # Стрелки у пагинатора
    try:
        items = paginator.page(page)
    except PageNotAnInteger:
        items = paginator.page(1)
    except EmptyPage:
        items = paginator.page(paginator.num_pages)

    if page is None:
        page = 1

    page = int(page)

    # Сериализация. Если нет подходящего сериализатора, то будет None.
    serializer_class = serializer_classes.get(catalog_slug)
    if serializer_class:
        serializer = serializer_class(items, many=True)
        data = serializer.data
    else:
        data = None

    return Response({'entities': data, 'pageNumber': page,
                     'pagesCount': paginator.num_pages})
