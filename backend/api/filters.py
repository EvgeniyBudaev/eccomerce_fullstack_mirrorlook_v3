from django_filters import rest_framework as df_filters
from django_filters.fields import CSVWidget, MultipleChoiceField

from store.models import Mirror


# Вариант 1
class MultipleField(MultipleChoiceField):

    def valid_value(self, value):
        return True


class MultipleFilter(df_filters.MultipleChoiceFilter):
    field_class = MultipleField


class ProductMultipleFilterBackend(df_filters.FilterSet):
    form = MultipleFilter(
        lookup_expr='icontains',
        field_name='form',
        widget=CSVWidget
    )

    class Meta:
        model = Mirror
        fields = ('form',)


# Вариант 2
class CharFilterInFilter(df_filters.BaseInFilter, df_filters.CharFilter):
    pass


class MirrorFilter(df_filters.FilterSet):
    form = CharFilterInFilter(field_name='form', lookup_expr='in')
    category = CharFilterInFilter(field_name='category__title',
                                  lookup_expr='in')
    price = df_filters.RangeFilter()

    class Meta:
        model = Mirror
        fields = ('form', 'category', 'price')
