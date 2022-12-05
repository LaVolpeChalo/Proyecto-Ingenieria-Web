from django.contrib import admin

from .models import Question,Choice,Vendedor,Producto

admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Vendedor)
admin.site.register(Producto)
