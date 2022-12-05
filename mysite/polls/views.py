from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

@api_view(['GET'])
def login(request):
    user = User.objects.get(username='Alfredo')
    token = Token.objects.create(user=user)
    print(token.key)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)