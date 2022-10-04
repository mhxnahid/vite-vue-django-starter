from django.urls import path, re_path
from .views import DashboardView

urlpatterns = [
    re_path('^app/.*',  DashboardView.as_view(), name='app_view')
]
