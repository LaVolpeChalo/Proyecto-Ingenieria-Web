# Generated by Django 4.1.3 on 2022-12-05 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0002_producto'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vendedor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombreVendedor', models.CharField(max_length=20)),
            ],
        ),
        migrations.DeleteModel(
            name='Producto',
        ),
    ]
