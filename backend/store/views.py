from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from rest_framework.decorators import api_view
from rest_framework.response import Response
import django_filters
from django.db.models import Q

from .models import Mirror, Console
from .serializers import MirrorSerializer, ConsoleSerializer


@api_view(['GET'])
def get_products_by_catalog(request, catalog_slug):
    """В зависимости от url каталога получаем соответствующие продукты."""
    records_on_page = 10
    serializer_classes = {'mirrors': MirrorSerializer, 'consoles': ConsoleSerializer}
    items_classes = {'mirrors': Mirror, 'consoles': Console}
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

    paging = {
        'pageNumber': page,
        'pagesCount': paginator.num_pages
    }

    return Response({'entities': data, 'paging': paging})


class MirrorFilter(django_filters.FilterSet):
    class Meta:
        model = Mirror
        fields = ['category_id', 'form']


@api_view(['POST'])
def filter_mirrors(request):
    print("[request.data!!!]", )
    forms = request.data.get('form', [])
    category_id = request.data.get('category_id', [])
    qs = Q()
    if forms:
        qs &= Q(form__in=forms)
    if category_id:
        qs &= Q(category_id__in=category_id)
    mirrors = Mirror.objects.filter(qs)
    serializer = MirrorSerializer(mirrors, many=True)
    return Response({'entities': serializer.data})

# @api_view(['POST'])
# def filter_mirrors(request):
#     models = {'mirror': Mirror, 'console': Console}
#     serializers = {'mirror': MirrorSerializer, 'console': ConsoleSerializer}
#
#     filter_params = {k.lstrip('filter_param_', '') + '__in': v for k, v in request.data.items() if
#                      k.startswith('filter_param_') and v}
#     model_name = request.data['model_name'].lower()
#     model = models[model_name]
#     objects = model.objects.filter(filter_params)
#     serializer = serializers[model_name](objects, many=True)
#
#     return Response({'entities': serializer.data})

