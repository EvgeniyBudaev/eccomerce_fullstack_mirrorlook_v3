from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

User = get_user_model()


class Catalog(models.Model):
    """Модель каталога (зеркала, консоли, ...)."""
    title = models.CharField(max_length=255, verbose_name='Название каталога',
                             help_text='Укажите название для каталога')
    image = models.ImageField(null=True, blank=True,
                              verbose_name='Изображение каталога',
                              help_text='Добавьте изображение каталогу')
    catalog_slug = models.SlugField(max_length=255, unique=True,
                                    verbose_name='URL каталога',
                                    help_text='Задайте уникальный URL адрес '
                                              'названию каталога')
    created = models.DateTimeField(auto_now_add=True,
                                   verbose_name='Дата создания')

    class Meta:
        ordering = ['title']
        verbose_name = 'Каталог'
        verbose_name_plural = 'Каталог'

    def __str__(self):
        return self.title


class Category(models.Model):
    """Модель категории (венецианские зеркала, напольные зеркала, ...)."""
    catalog = models.ForeignKey(Catalog, null=True, verbose_name='Категория',
                                on_delete=models.CASCADE,
                                related_name='categories',
                                help_text='Пожалуйста, выберите  каталог')
    title = models.CharField(max_length=255, verbose_name='Имя категории',
                             help_text='Укажите название для категории')
    image = models.ImageField(null=True, blank=True,
                              verbose_name='Изображение категории',
                              help_text='Добавьте изображение к посту')
    category_slug = models.SlugField(max_length=255, unique=True,
                                     verbose_name='URL категории',
                                     help_text='Задайте уникальный URL адрес '
                                               'категории')
    created = models.DateTimeField(auto_now_add=True,
                                   verbose_name='Дата создания')

    class Meta:
        ordering = ['title']
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.title


class Product(models.Model):
    """Абстрактная модель."""
    BRAND = (
        ('Mirror Look', 'Mirror Look'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True,
                             verbose_name='Пользователь')
    category = models.ForeignKey(Category, verbose_name='Категория',
                                 on_delete=models.CASCADE)
    title = models.CharField(max_length=200, null=True, blank=True,
                             verbose_name='Наименование товара')
    product_slug = models.SlugField(max_length=255, unique=True,
                                    verbose_name='URL продукта')
    brand = models.CharField(max_length=64, null=True, blank=True,
                             verbose_name='Бренд', choices=BRAND)
    image = models.ImageField(null=True, blank=True,
                              upload_to='photos/%Y/%m/%d/',
                              default='/placeholder.png',
                              verbose_name='Изображение продукта')
    product_photo1 = models.ImageField(null=True, blank=True,
                                       upload_to='photos/%Y/%m/%d/')
    product_photo2 = models.ImageField(null=True, blank=True,
                                       upload_to='photos/%Y/%m/%d/')
    product_photo3 = models.ImageField(null=True, blank=True,
                                       upload_to='photos/%Y/%m/%d/')
    product_photo4 = models.ImageField(null=True, blank=True,
                                       upload_to='photos/%Y/%m/%d/')
    price = models.DecimalField(max_digits=8, decimal_places=2, null=True,
                                blank=True, verbose_name='Цена')
    count_in_stock = models.PositiveIntegerField(null=True, blank=True,
                                                 default=1,
                                                 verbose_name='Кол-во товара')
    description = models.TextField(null=True, blank=True,
                                   verbose_name='Описание товара')
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True,
                                 blank=True, verbose_name='Рейтинг')
    weight = models.DecimalField(max_digits=7, decimal_places=2, null=True,
                                 blank=True, verbose_name='Вес')
    created = models.DateTimeField(auto_now_add=True,
                                   verbose_name='Дата создания')

    class Meta:
        """Объявляет модель абстрактной."""
        abstract = True

    def __str__(self):
        return self.title


class Mirror(Product):
    """Модель зеркала."""
    FORM_TYPES = (
        ('Прямоугольная', 'Прямоугольная'),
        ('Круглая', 'Круглая'),
        ('Овальная', 'Овальная'),
    )

    MIRROR_MATERIAL = (
        ('Влагостойкое серебряное зеркало', 'Влагостойкое серебряное зеркало'),
    )

    FRAME_MATERIAL = (
        ('Основа МДФ', 'Основа МДФ'),
        ('Полирезин', 'Полирезин'),
    )

    FRAME_COLOR = (
        ('Серебро', 'Серебро'),
    )

    form = models.CharField(max_length=64, null=True, blank=True,
                            verbose_name='Форма зеркала', choices=FORM_TYPES)
    mirror_material = models.CharField(max_length=64, null=True, blank=True,
                                       verbose_name='Материал зеркала',
                                       choices=MIRROR_MATERIAL)
    frame_material = models.CharField(max_length=64, null=True, blank=True,
                                      verbose_name='Материал рамы',
                                      choices=FRAME_MATERIAL)
    frame_color = models.CharField(max_length=64, null=True, blank=True,
                                   verbose_name='Цвет рамы',
                                   choices=FRAME_COLOR)
    height_with_frame = models.DecimalField(max_digits=7, decimal_places=2,
                                            null=True, blank=True,
                                            verbose_name="Высота с рамой")
    width_with_frame = models.DecimalField(max_digits=7, decimal_places=2,
                                            null=True, blank=True,
                                            verbose_name="Ширина с рамой")
    height_without_frame = models.DecimalField(max_digits=7, decimal_places=2,
                                               null=True, blank=True,
                                               verbose_name="Высота без рамы")
    width_without_frame = models.DecimalField(max_digits=7, decimal_places=2,
                                               null=True, blank=True,
                                               verbose_name="Ширина без рамы")
    is_faced = models.BooleanField(default=True, null=True, blank=True,
                                   verbose_name='Наличие фацета')

    class Meta:
        # ordering = ['form']
        verbose_name = 'Зеркало'
        verbose_name_plural = 'Зеркала'

    def __str__(self):
        return self.form


class Console(Product):
    """Модель консоли."""
    color = models.CharField(max_length=255, null=True, blank=True,
                             verbose_name='Цвет')

    class Meta:
        # ordering = ['color']
        verbose_name = 'Консоль'
        verbose_name_plural = 'Консоли'

    def __str__(self):
        return self.color


class Review(models.Model):
    """Модель комментария."""
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE,
                                     null=True, verbose_name='Тип продукта',
                                     related_name='reviews')
    object_id = models.PositiveIntegerField('content_type', 'object_id')
    content_object = GenericForeignKey()
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True,
                             verbose_name='Пользователь',
                             related_name='reviews')
    title = models.CharField(max_length=200, null=True, blank=True,
                             verbose_name='Заголовок')
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True,
                                 blank=True, verbose_name='Рейтинг')
    comment = models.TextField(null=True, blank=True,
                               verbose_name='Комментарий')
    created = models.DateTimeField(auto_now_add=True,
                                   verbose_name='Дата публикации')

    class Meta:
        ordering = ['created']
        verbose_name = 'Комментарий'
        verbose_name_plural = 'Комментарии'

    def __str__(self):
        return str(self.rating)


class Order(models.Model):
    """Модель заказа."""
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True,
                             verbose_name='Пользователь',
                             related_name='orders')
    payment_method = models.CharField(max_length=200, null=True, blank=True,
                                      verbose_name='Способ оплаты')
    tax_price = models.DecimalField(max_digits=7, decimal_places=2, null=True,
                                    blank=True, verbose_name='Налог')
    shipping_price = models.DecimalField(max_digits=7, decimal_places=2,
                                         null=True, blank=True,
                                         verbose_name='Стоимость доставки')
    total_price = models.DecimalField(max_digits=7, decimal_places=2, null=True,
                                      blank=True,
                                      verbose_name='Общая сумма заказа')
    is_paid = models.BooleanField(default=False, verbose_name='Статус оплаты')
    paid_at = models.DateTimeField(auto_now_add=False, null=True, blank=True,
                                   verbose_name='Дата оплаты')
    is_delivered = models.BooleanField(default=False,
                                       verbose_name='Статус доставки')
    delivered_at = models.DateTimeField(auto_now_add=True,
                                        verbose_name='Дата доставки')
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True,
                                   verbose_name='Дата создания')

    class Meta:
        ordering = ['created']
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзина'

    def __str__(self):
        return str(self.created)


class OrderItem(models.Model):
    """Модель элемента одного заказа."""
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE,
                                     null=True, verbose_name='Тип продукта',
                                     related_name='orderItems')
    object_id = models.PositiveIntegerField('content_type', 'object_id')
    content_object = GenericForeignKey()
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True,
                              verbose_name='Заказ',
                              related_name='orderItems')
    title = models.CharField(max_length=200, null=True, blank=True,
                             verbose_name='Название товара')
    quantity = models.IntegerField(null=True, blank=True, default=0,
                                   verbose_name='Кол-во')
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True,
                                blank=True, verbose_name='Цена')
    image = models.CharField(max_length=200, null=True, blank=True,
                             verbose_name='Фото')

    class Meta:
        ordering = ['order']
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    def __str__(self):
        return str(self.title)


class ShippingAddress(models.Model):
    """Модель доставки."""
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True,
                                 blank=True, verbose_name='Заказ',
                                 related_name='shippingAddresses')
    address = models.CharField(max_length=200, null=True, blank=True,
                               verbose_name='Адрес')
    city = models.CharField(max_length=200, null=True, blank=True,
                            verbose_name='Город')
    postal_code = models.CharField(max_length=200, null=True, blank=True,
                                   verbose_name='Индекс')
    country = models.CharField(max_length=200, null=True, blank=True,
                               verbose_name='Страна')
    shipping_price = models.DecimalField(max_digits=7, decimal_places=2,
                                         null=True, blank=True,
                                         verbose_name='Стоимость доставки')

    class Meta:
        ordering = ['order']
        verbose_name = 'Доставка'
        verbose_name_plural = 'Доставка'

    def __str__(self):
        return str(self.address)
