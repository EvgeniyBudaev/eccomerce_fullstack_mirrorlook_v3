from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import MirrorViewSet, ConsoleViewSet

router = DefaultRouter()
router.register('mirrors', MirrorViewSet, basename='mirrors')
router.register('consoles', ConsoleViewSet, basename='consoles')

urlpatterns = [
    path('v1/', include(router.urls)),
    path('v1/auth/', include('djoser.urls')),
    path('v1/auth/', include('djoser.urls.jwt'))
]
