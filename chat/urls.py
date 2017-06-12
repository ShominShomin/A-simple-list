from django.conf.urls import include,url
from chat import views

urlpatterns = [
    url(r'^$', views.MainView.as_view(), name='main'),
    url(r'^ajax/say_hello/$', views.say_hello, name='say_hello'),
]