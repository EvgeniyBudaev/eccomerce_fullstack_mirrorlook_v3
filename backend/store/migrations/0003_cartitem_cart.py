# Generated by Django 3.2.5 on 2021-08-14 13:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_remove_cartitem_cart'),
    ]

    operations = [
        migrations.AddField(
            model_name='cartitem',
            name='cart',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='store.cart', verbose_name='Корзина'),
        ),
    ]
