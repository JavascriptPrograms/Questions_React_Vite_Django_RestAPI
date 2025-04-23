from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from app import views

urlpatterns = [
    path('questions/', views.question_list),
    path('questions/<int:pk>/', views.question_detail),
]
