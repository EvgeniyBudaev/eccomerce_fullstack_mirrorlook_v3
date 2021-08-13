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
    date_created = models.DateTimeField(auto_now_add=True,
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
    date_created = models.DateTimeField(auto_now_add=True,
                                   verbose_name='Дата создания')

    class Meta:
        ordering = ['title']
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.title


class Attribute(models.Model):
    """Модель атрибутов продукта."""
    FORM_TYPES = (
        ('Круглая', 'Круглая'),
        ('Овальная', 'Овальная'),
        ('Прямоугольная', 'Прямоугольная'),
        ('Фигурная', 'Фигурная'),
    )

    MIRROR_MATERIAL = (
        ('Влагостойкое серебряное зеркало', 'Влагостойкое серебряное зеркало'),
    )

    FRAME_MATERIAL = (
        ('Основа МДФ', 'Основа МДФ'),
        ('Полирезин', 'Полирезин'),
    )

    FRAME_COLOR = (
        ('Античное золото', 'Античное золото'),
        ('Античное серебро', 'Античное серебро'),
        ('Бронза', 'Бронза'),
        ('Золото', 'Золото'),
        ('Латунь', 'Латунь'),
        ('Серебро', 'Серебро'),
        ('Хром', 'Хром'),
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
    weight = models.DecimalField(max_digits=7, decimal_places=2, null=True,
                                 blank=True, verbose_name='Вес')
    is_faced = models.BooleanField(default=True, null=True, blank=True,
                                   verbose_name='Наличие фацета')

    class Meta:
        verbose_name = 'Атрибут'
        verbose_name_plural = 'Атрибуты'

    def __str__(self):
        return self.form


class Product(models.Model):
    """Модель продукта."""
    BRAND = (
        ('Mirror Look', 'Mirror Look'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True,
                             verbose_name='Пользователь')
    category = models.ForeignKey(Category, verbose_name='Категория',
                                 related_name='products',
                                 on_delete=models.CASCADE)
    attributes = models.ManyToManyField(Attribute, verbose_name='Атрибуты',
                                        through='ProductAttribute')
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
    date_created = models.DateTimeField(auto_now_add=True, db_index=True,
                                        verbose_name='Дата создания')

    class Meta:
        ordering = ['date_created']
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    def __str__(self):
        return self.title


class ProductAttribute(models.Model):
    """Промежуточная модель продуктов и атрибутов."""
    attribute = models.ForeignKey(Attribute, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Продукт и атрибут'
        verbose_name_plural = 'Продукты и атрибуты'

    def __str__(self):
        return f'{self.attribute} {self.product}'

# class Console(Product):
#     """Модель консоли."""
#     category = models.ForeignKey(Category, verbose_name='Категория',
#                                  related_name='consoles',
#                                  on_delete=models.CASCADE)
#     color = models.CharField(max_length=255, null=True, blank=True,
#                              verbose_name='Цвет')
#
#     class Meta:
#         # ordering = ['color']
#         verbose_name = 'Консоль'
#         verbose_name_plural = 'Консоли'
#
#     def __str__(self):
#         return self.color


# class CartProduct(models.Model):
#     """Модель продукта корзины."""
#     user = models.ForeignKey(User, verbose_name='Покупатель',
#                              on_delete=models.CASCADE)
#     cart = models.ForeignKey('Cart', verbose_name='Корзина',
#                              on_delete=models.CASCADE)
#     content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE,
#                                      verbose_name='Тип продукта')
#     object_id = models.PositiveIntegerField('content_type', 'object_id')
#     content_object = GenericForeignKey('content_type', 'object_id')
#     qty = models.PositiveIntegerField(default=1,
#                                       verbose_name='Количество товара')
#     final_price = models.DecimalField(max_digits=9, decimal_places=2,
#                                       verbose_name='Итоговая цена')
#
#     def __str__(self):
#         return f'Продукт: {self.content_object.name} (для корзины)'
#
#     def save(self, *args, **kwargs):
#         self.final_price = self.qty * self.content_object.price
#         super().save(*args, **kwargs)
#
#     class Meta:
#         verbose_name = 'Продукт корзины'
#         verbose_name_plural = 'Продукты корзины'


# class Cart(models.Model):
#     """Модель корзины."""
#     id = models.AutoField(primary_key=True, editable=False)
#     owner = models.ForeignKey(User, verbose_name='Покупатель',
#                               on_delete=models.CASCADE)
#     products = models.ManyToManyField('CartProduct', verbose_name='Продукты',
#                                       blank=True, related_name='related_cart')
#     total_products = models.PositiveIntegerField(default=0,
#                                                  verbose_name='Общее кол-во')
#     final_price = models.DecimalField(max_digits=9, decimal_places=2, default=0,
#                                       verbose_name='Итоговая цена')
#     in_order = models.BooleanField(default=False, help_text='Является ли '
#                                                             'корзина частью '
#                                                             'какого-либо '
#                                                             'заказа?')
#     for_anonymous_user = models.BooleanField(default=False,
#                                              verbose_name='Анонимный '
#                                                           'пользователь?')
#
#     def __str__(self):
#         return str(self.id)
#
#     def save(self, *args, **kwargs):
#         if self.id:
#             self.total_products = self.products.count()
#             self.final_price = sum([cproduct.final_price for cproduct in
#                                     self.products.all()])
#         super().save(*args, **kwargs)
#
#     class Meta:
#         verbose_name = 'Корзина'
#         verbose_name_plural = 'Корзины'


# class Review(models.Model):
#     """Модель комментария."""
#     content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE,
#                                      null=True, verbose_name='Тип продукта',
#                                      related_name='reviews')
#     object_id = models.PositiveIntegerField('content_type', 'object_id')
#     content_object = GenericForeignKey()
#     user = models.ForeignKey(User, on_delete=models.CASCADE, null=True,
#                              verbose_name='Пользователь',
#                              related_name='reviews')
#     title = models.CharField(max_length=200, null=True, blank=True,
#                              verbose_name='Заголовок')
#     rating = models.DecimalField(max_digits=7, decimal_places=2, null=True,
#                                  blank=True, verbose_name='Рейтинг')
#     comment = models.TextField(null=True, blank=True,
#                                verbose_name='Комментарий')
#     created = models.DateTimeField(auto_now_add=True,
#                                    verbose_name='Дата публикации')
#
#     class Meta:
#         ordering = ['created']
#         verbose_name = 'Комментарий'
#         verbose_name_plural = 'Комментарии'
#
#     def __str__(self):
#         return str(self.rating)


# class Order(models.Model):
#     """Модель заказа."""
#     user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True,
#                              verbose_name='Пользователь',
#                              related_name='orders')
#     payment_method = models.CharField(max_length=200, null=True, blank=True,
#                                       verbose_name='Способ оплаты')
#     tax_price = models.DecimalField(max_digits=7, decimal_places=2, null=True,
#                                     blank=True, verbose_name='Налог')
#     shipping_price = models.DecimalField(max_digits=7, decimal_places=2,
#                                          null=True, blank=True,
#                                          verbose_name='Стоимость доставки')
#     total_price = models.DecimalField(max_digits=7, decimal_places=2, null=True,
#                                       blank=True,
#                                       verbose_name='Общая сумма заказа')
#     is_paid = models.BooleanField(default=False, verbose_name='Статус оплаты')
#     paid_at = models.DateTimeField(auto_now_add=False, null=True, blank=True,
#                                    verbose_name='Дата оплаты')
#     is_delivered = models.BooleanField(default=False,
#                                        verbose_name='Статус доставки')
#     delivered_at = models.DateTimeField(auto_now_add=True,
#                                         verbose_name='Дата доставки')
#     created = models.DateTimeField(auto_now_add=True, null=True, blank=True,
#                                    verbose_name='Дата создания')
#
#     class Meta:
#         ordering = ['created']
#         verbose_name = 'Заказ'
#         verbose_name_plural = 'Заказы'
#
#     def __str__(self):
#         return str(self.created)


# class OrderItem(models.Model):
#     """Модель элемента одного заказа."""
#     content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE,
#                                      null=True, verbose_name='Тип продукта',
#                                      related_name='orderItems')
#     object_id = models.PositiveIntegerField('content_type', 'object_id')
#     content_object = GenericForeignKey()
#     order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True,
#                               verbose_name='Заказ',
#                               related_name='orderItems')
#     title = models.CharField(max_length=200, null=True, blank=True,
#                              verbose_name='Название товара')
#     quantity = models.IntegerField(null=True, blank=True, default=0,
#                                    verbose_name='Кол-во')
#     price = models.DecimalField(max_digits=7, decimal_places=2, null=True,
#                                 blank=True, verbose_name='Цена')
#     image = models.CharField(max_length=200, null=True, blank=True,
#                              verbose_name='Фото')
#
#     class Meta:
#         ordering = ['order']
#         verbose_name = 'Детали заказа'
#         verbose_name_plural = 'Детали заказов'
#
#     def __str__(self):
#         return str(self.title)


# class ShippingAddress(models.Model):
#     """Модель доставки."""
#     order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True,
#                                  blank=True, verbose_name='Заказ',
#                                  related_name='shippingAddresses')
#     address = models.CharField(max_length=200, null=True, blank=True,
#                                verbose_name='Адрес')
#     city = models.CharField(max_length=200, null=True, blank=True,
#                             verbose_name='Город')
#     postal_code = models.CharField(max_length=200, null=True, blank=True,
#                                    verbose_name='Индекс')
#     country = models.CharField(max_length=200, null=True, blank=True,
#                                verbose_name='Страна')
#     shipping_price = models.DecimalField(max_digits=7, decimal_places=2,
#                                          null=True, blank=True,
#                                          verbose_name='Стоимость доставки')
#
#     class Meta:
#         ordering = ['order']
#         verbose_name = 'Доставка'
#         verbose_name_plural = 'Доставка'
#
#     def __str__(self):
#         return str(self.address)
