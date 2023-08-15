from django.urls import path

from . import views

urlpatterns = [
    path('', views.sign, name='sign'),
    path('index', views.index, name='index'),
    path('index,display', views.display, name='display'),
    
    
    
    
]