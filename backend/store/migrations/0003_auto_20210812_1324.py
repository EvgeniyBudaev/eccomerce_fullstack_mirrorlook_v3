# Generated by Django 3.2.5 on 2021-08-12 10:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('contenttypes', '0002_remove_content_type_name'),
        ('store', '0002_auto_20210809_0701'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_products', models.PositiveIntegerField(default=0, verbose_name='Общее кол-во')),
                ('final_price', models.DecimalField(decimal_places=2, default=0, max_digits=9, verbose_name='Итоговая цена')),
                ('in_order', models.BooleanField(default=False, help_text='Является ли корзина частью какого-либо заказа?')),
                ('for_anonymous_user', models.BooleanField(default=False, verbose_name='Анонимный пользователь?')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Покупатель')),
            ],
            options={
                'verbose_name': 'Корзина',
                'verbose_name_plural': 'Корзины',
            },
        ),
        migrations.AlterModelOptions(
            name='order',
            options={'ordering': ['created'], 'verbose_name': 'Заказ', 'verbose_name_plural': 'Заказы'},
        ),
        migrations.AlterModelOptions(
            name='orderitem',
            options={'ordering': ['order'], 'verbose_name': 'Детали заказа', 'verbose_name_plural': 'Детали заказов'},
        ),
        migrations.CreateModel(
            name='CartProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('object_id', models.PositiveIntegerField(verbose_name='content_type')),
                ('qty', models.PositiveIntegerField(default=1, verbose_name='Количество товара')),
                ('final_price', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Итоговая цена')),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.cart', verbose_name='Корзина')),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype', verbose_name='Тип продукта')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Покупатель')),
            ],
            options={
                'verbose_name': 'Продукт корзины',
                'verbose_name_plural': 'Продукты корзины',
            },
        ),
        migrations.AddField(
            model_name='cart',
            name='products',
            field=models.ManyToManyField(blank=True, null=True, related_name='related_cart', to='store.CartProduct', verbose_name='Продукты'),
        ),
    ]
