from django.conf.urls import  include
from django.urls import path, re_path
from django.contrib import admin
from apis import views

urlpatterns = [
    path(r'login/', views.view_login.as_view()),
    path(r'register/', views.view_register.as_view()),
    path(r'forms/', views.view_form.as_view())
]