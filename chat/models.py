from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    # Add custom fields here, such as profile picture or additional user data
    bio = models.TextField(max_length=500, blank=True)

    # Define a related_name to avoid clashes with auth.User
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',
        blank=True,
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_set',
        blank=True,
    )
