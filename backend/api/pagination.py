from rest_framework.pagination import (PageNumberPagination,
                                       LimitOffsetPagination)
from rest_framework.response import Response


class StorePagination(PageNumberPagination):
    # default_limit = 2
    page_size = 2

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            # 'count': self.count,
            'count': self.page.paginator.count,
            'entities': data
        })
