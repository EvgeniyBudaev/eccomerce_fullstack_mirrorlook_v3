# Generated by Django 3.2.4 on 2021-07-15 02:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Catalog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Укажите название для каталога', max_length=255, verbose_name='Название каталога')),
                ('image', models.ImageField(blank=True, help_text='Добавьте изображение каталогу', null=True, upload_to='', verbose_name='Изображение каталога')),
                ('catalog_slug', models.SlugField(help_text='Задайте уникальный URL адрес названию каталога', max_length=255, unique=True, verbose_name='URL каталога')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
            ],
            options={
                'verbose_name': 'Каталог',
                'verbose_name_plural': 'Каталог',
                'ordering': ['title'],
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Укажите название для категории', max_length=255, verbose_name='Имя категории')),
                ('image', models.ImageField(blank=True, help_text='Добавьте изображение к посту', null=True, upload_to='', verbose_name='Изображение категории')),
                ('category_slug', models.SlugField(help_text='Задайте уникальный URL адрес категории', max_length=255, unique=True, verbose_name='URL категории')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
                ('catalog', models.ForeignKey(help_text='Пожалуйста, выберите  каталог', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='categories', to='store.catalog', verbose_name='Категория')),
            ],
            options={
                'verbose_name': 'Категория',
                'verbose_name_plural': 'Категории',
                'ordering': ['title'],
            },
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('payment_method', models.CharField(blank=True, max_length=200, null=True, verbose_name='Способ оплаты')),
                ('tax_price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Налог')),
                ('shipping_price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Стоимость доставки')),
                ('total_price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Общая сумма заказа')),
                ('is_paid', models.BooleanField(default=False, verbose_name='Статус оплаты')),
                ('paid_at', models.DateTimeField(blank=True, null=True, verbose_name='Дата оплаты')),
                ('is_delivered', models.BooleanField(default=False, verbose_name='Статус доставки')),
                ('delivered_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата доставки')),
                ('created', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Дата создания')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='orders', to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Корзина',
                'verbose_name_plural': 'Корзина',
                'ordering': ['created'],
            },
        ),
        migrations.CreateModel(
            name='ShippingAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(blank=True, max_length=200, null=True, verbose_name='Адрес')),
                ('city', models.CharField(blank=True, max_length=200, null=True, verbose_name='Город')),
                ('postal_code', models.CharField(blank=True, max_length=200, null=True, verbose_name='Индекс')),
                ('country', models.CharField(blank=True, max_length=200, null=True, verbose_name='Страна')),
                ('shipping_price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Стоимость доставки')),
                ('order', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='shippingAddresses', to='store.order', verbose_name='Заказ')),
            ],
            options={
                'verbose_name': 'Доставка',
                'verbose_name_plural': 'Доставка',
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('object_id', models.PositiveIntegerField(verbose_name='content_type')),
                ('title', models.CharField(blank=True, max_length=200, null=True, verbose_name='Заголовок')),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Рейтинг')),
                ('comment', models.TextField(blank=True, null=True, verbose_name='Комментарий')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')),
                ('content_type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='contenttypes.contenttype', verbose_name='Тип продукта')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Комментарий',
                'verbose_name_plural': 'Комментарии',
                'ordering': ['created'],
            },
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('object_id', models.PositiveIntegerField(verbose_name='content_type')),
                ('title', models.CharField(blank=True, max_length=200, null=True, verbose_name='Название товара')),
                ('quantity', models.IntegerField(blank=True, default=0, null=True, verbose_name='Кол-во')),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Цена')),
                ('image', models.CharField(blank=True, max_length=200, null=True, verbose_name='Фото')),
                ('content_type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='orderItems', to='contenttypes.contenttype', verbose_name='Тип продукта')),
                ('order', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='orderItems', to='store.order', verbose_name='Заказ')),
            ],
            options={
                'verbose_name': 'Заказ',
                'verbose_name_plural': 'Заказы',
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Mirror',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=200, null=True, verbose_name='Наименование товара')),
                ('product_slug', models.SlugField(max_length=255, unique=True, verbose_name='URL продукта')),
                ('image', models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to='photos/%Y/%m/%d/', verbose_name='Изображение продукта')),
                ('product_photo1', models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d/')),
                ('product_photo2', models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d/')),
                ('product_photo3', models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d/')),
                ('product_photo4', models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d/')),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=8, null=True, verbose_name='Цена')),
                ('count_in_stock', models.IntegerField(blank=True, default=0, null=True, verbose_name='Кол-во товара')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Описание товара')),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Рейтинг')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
                ('form', models.CharField(blank=True, max_length=64, null=True, verbose_name='Форма зеркала')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.category', verbose_name='Категория')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Зеркало',
                'verbose_name_plural': 'Зеркала',
                'ordering': ['form'],
            },
        ),
        migrations.CreateModel(
            name='Console',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=200, null=True, verbose_name='Наименование товара')),
                ('product_slug', models.SlugField(max_length=255, unique=True, verbose_name='URL продукта')),
                ('image', models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to='photos/%Y/%m/%d/', verbose_name='Изображение продукта')),
                ('product_photo1', models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d/')),
                ('product_photo2', models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d/')),
                ('product_photo3', models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d/')),
                ('product_photo4', models.ImageField(blank=True, null=True, upload_to='photos/%Y/%m/%d/')),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=8, null=True, verbose_name='Цена')),
                ('count_in_stock', models.IntegerField(blank=True, default=0, null=True, verbose_name='Кол-во товара')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Описание товара')),
                ('rating', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Рейтинг')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
                ('color', models.CharField(blank=True, max_length=255, null=True, verbose_name='Цвет')),
                ('count_legs', models.PositiveIntegerField(verbose_name='Количество ножек')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.category', verbose_name='Категория')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Консоль',
                'verbose_name_plural': 'Консоли',
                'ordering': ['count_legs'],
            },
        ),
    ]
