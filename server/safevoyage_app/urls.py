from django.urls import path
from django.contrib import admin
from .import views
# from .views import TravelAgencyViewSet, ReviewViewSet

urlpatterns = [
      path("userregistration/", views.UserRegistrationView.as_view(),name="userregistration"),
      path('userlogin/',views.UserLoginView.as_view(),name='userlogin'),
      path('travelagency/',views.TravelAgencyView.as_view(),name='travelagency'),
      path('review/',views. ReviewView.as_view(),name='review'),
      path('api/reviews/', views.Review),

      
]