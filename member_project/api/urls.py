from django.urls import path
from .views import RegisterUser, LoginAPI, UserProfile, LogoutAPI

urlpatterns = [
    path("register/", RegisterUser.as_view()),
    path("login/", LoginAPI.as_view()),
    path("profile/", UserProfile.as_view()),
    path("logout/", LogoutAPI.as_view()),
]
