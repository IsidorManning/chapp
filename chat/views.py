from django.shortcuts import render, redirect
from .forms import SignupForm
from django.contrib.auth import login
from .models import CustomUser


def chatPage(request, *args, **kwargs):
    if not request.user.is_authenticated:
        return redirect("login-user")
    context = {}
    return render(request, "chat/chat.html", context)


def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            user = CustomUser.objects.create_superuser(
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password'],
                email=form.cleaned_data['email'],
            )
            user.save()
            login(request, user)
            return redirect('chat-page')
    else:
        form = SignupForm()

    return render(request, 'chat/signup.html', {'form': form})
