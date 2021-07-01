from django.urls import path

from . import views


urlpatterns = [
    path('catalog/<slug:catalog_slug>/', views.get_products_by_catalog, name="get_products_by_catalog"),
]
