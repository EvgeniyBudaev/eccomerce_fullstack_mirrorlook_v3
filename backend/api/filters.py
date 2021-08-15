from django_filters import rest_framework as df_filters
from django_filters.fields import CSVWidget, MultipleChoiceField

from store.models import Catalog, Product


# Вариант 1
# class MultipleField(MultipleChoiceField):
#
#     def valid_value(self, value):
#         return True
#
#
# class MultipleFilter(df_filters.MultipleChoiceFilter):
#     field_class = MultipleField
#
#
# class ProductMultipleFilterBackend(df_filters.FilterSet):
#     form = MultipleFilter(
#         lookup_expr='icontains',
#         field_name='form',
#         widget=CSVWidget
#     )
#
#     class Meta:
#         model = Mirror
#         fields = ('form',)


# Вариант 2
class CharFilterInFilter(df_filters.BaseInFilter, df_filters.CharFilter):
    pass


class CatalogFilter(df_filters.FilterSet):
    title = CharFilterInFilter(field_name='title', lookup_expr='in')

    class Meta:
        model = Catalog
        fields = ('title',)


class ProductFilter(df_filters.FilterSet):
    catalog = CharFilterInFilter(field_name='catalog__title',
                                 lookup_expr='in')
    catalog_slug = CharFilterInFilter(field_name='catalog__catalog_slug',
                                      lookup_expr='in')
    category = CharFilterInFilter(field_name='category__title',
                                  lookup_expr='in')
    price = df_filters.RangeFilter()
    form = CharFilterInFilter(field_name='attributes__form', lookup_expr='in')
    frame_color = CharFilterInFilter(field_name='attributes__frame_color',
                                     lookup_expr='in')

    class Meta:
        model = Product
        fields = ('catalog', 'catalog_slug', 'category', 'price', 'form',
                  'frame_color')
