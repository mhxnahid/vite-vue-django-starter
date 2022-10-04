from django.shortcuts import render
from django.views.generic import TemplateView


class DashboardView(TemplateView):
    template_name = 'dashboard.html'

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)
