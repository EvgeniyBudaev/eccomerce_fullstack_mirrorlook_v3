from django.urls import path

from . import views


urlpatterns = [
    path('catalog/<slug:catalog_slug>/', views.get_products_by_catalog,
         name="get_products_by_catalog"),
    path('catalog/<slug:catalog_slug>/<slug:product_slug>/',
         views.get_product_by_catalog, name='get_product_by_catalog'),
    path('catalog/mirrors/filter/', views.filter_mirrors, name="filter"),
]
