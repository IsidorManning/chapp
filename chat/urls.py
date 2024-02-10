from django.urls import path
from .views import chatPage
from django.contrib.auth.views import LoginView, LogoutView
from .views import signup

urlpatterns = [
    path("", chatPage, name="chat-page"),

    path("accounts/profile/", chatPage, name="chat-page"),

    path("auth/login/", LoginView.as_view(
        template_name="chat/login.html"), name="login-user"),

    path("auth/logout/", LogoutView.as_view(
        template_name="chat/logout.html"), name="logout-user"),

    path('auth/signup/', signup, name='signup-user'),



]