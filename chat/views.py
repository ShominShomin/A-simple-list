from django.views.generic.base import TemplateView
from django.http import JsonResponse

class MainView(TemplateView):
    template_name = "MainLayout.html"

def say_hello(request):
    requestData = request.GET.get('request', None)
    data = "Hello"
    return JsonResponse(data, safe=False)