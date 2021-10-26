from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.core.validators import MaxValueValidator, MinValueValidator

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
    catalog = models.ForeignKey('store.Catalog', null=True,
                                verbose_name='Каталог',
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
                            verbose_name='Форма', choices=FORM_TYPES)
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
    catalog = models.ForeignKey('store.Catalog', verbose_name='Каталог',
                                related_name='products',
                                on_delete=models.CASCADE)
    category = models.ForeignKey('store.Category', verbose_name='Категория',
                                 related_name='products',
                                 on_delete=models.CASCADE)
    attributes = models.ManyToManyField('store.Attribute',
                                        verbose_name='Атрибуты',
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
    attribute = models.ForeignKey('store.Attribute', on_delete=models.CASCADE,
                                  verbose_name='Атрибут')
    product = models.ForeignKey('store.Product', on_delete=models.CASCADE,
                                verbose_name='Продукт')

    class Meta:
        verbose_name = 'Продукт и атрибут'
        verbose_name_plural = 'Продукты и атрибуты'

    def __str__(self):
        return f'{self.attribute} {self.product}'


class Cart(models.Model):
    """Модель корзины."""
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                             blank=True, null=True, default=None,
                             verbose_name='Покупатель', )
    date_created = models.DateTimeField(auto_now_add=True, db_index=True,
                                        verbose_name='Дата создания')
    date_updated = models.DateTimeField(auto_now=True, db_index=True,
                                        verbose_name='Дата обновления')

    def __str__(self):
        return str(self.date_created)

    class Meta:
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзины'


class CartItem(models.Model):
    """Модель продукта корзины."""
    cart = models.ForeignKey('store.Cart', on_delete=models.CASCADE,
                             related_name='cartitems', verbose_name='Корзина')
    product = models.ForeignKey(Product, on_delete=models.CASCADE,
                                verbose_name='Продукт')
    quantity = models.PositiveIntegerField(blank=True, default=0,
                                           verbose_name='Кол-во')
    date_created = models.DateTimeField(auto_now_add=True, db_index=True,
                                        verbose_name='Дата создания')
    date_updated = models.DateTimeField(auto_now=True, db_index=True,
                                        verbose_name='Дата обновления')

    def __str__(self):
        return str(self.date_created)

    class Meta:
        verbose_name = 'Продукт корзины'
        verbose_name_plural = 'Продукты корзины'


class Order(models.Model):
    """Модель заказа."""
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True,
                             verbose_name='Пользователь',
                             related_name='orders')
    payment_method = models.CharField(max_length=200, null=True, blank=True,
                                      verbose_name='Способ оплаты')
    tax_price = models.DecimalField(max_digits=15, decimal_places=2, null=True,
                                    blank=True, verbose_name='Налог')
    shipping_price = models.DecimalField(max_digits=15, decimal_places=2,
                                         null=True, blank=True,
                                         verbose_name='Стоимость доставки')
    total_price = models.DecimalField(max_digits=15, decimal_places=2,
                                      null=True,
                                      blank=True,
                                      verbose_name='Общая сумма заказа')
    is_paid = models.BooleanField(default=False, verbose_name='Статус оплаты')
    paid_at = models.DateTimeField(auto_now_add=False, null=True, blank=True,
                                   verbose_name='Дата оплаты')
    is_delivered = models.BooleanField(default=False,
                                       verbose_name='Статус доставки')
    delivered_at = models.DateTimeField(auto_now_add=False, null=True,
                                        blank=True,
                                        verbose_name='Дата доставки')
    date_created = models.DateTimeField(auto_now_add=True, db_index=True,
                                        verbose_name='Дата создания')
    date_updated = models.DateTimeField(auto_now=True, db_index=True,
                                        verbose_name='Дата обновления')

    class Meta:
        ordering = ['date_created']
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    def __str__(self):
        return str(self.date_created)


class OrderItem(models.Model):
    """Модель заказанного продукта."""
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True,
                              verbose_name='Заказ',
                              related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE,
                                verbose_name='Продукт')
    title = models.CharField(max_length=200, null=True, blank=True,
                             verbose_name='Название товара')
    quantity = models.IntegerField(null=True, blank=True, default=0,
                                   verbose_name='Кол-во')
    price = models.DecimalField(max_digits=15, decimal_places=2, null=True,
                                blank=True, verbose_name='Цена')
    image = models.CharField(max_length=200, null=True, blank=True,
                             verbose_name='Фото')

    class Meta:
        ordering = ['order']
        verbose_name = 'Детали заказа'
        verbose_name_plural = 'Детали заказов'

    def __str__(self):
        return str(self.title)


class ShippingAddress(models.Model):
    """Модель доставки."""
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True,
                                 blank=True, verbose_name='Заказ',
                                 related_name='shipping_address')
    address = models.CharField(max_length=200, null=True, blank=True,
                               verbose_name='Адрес')
    apartment = models.PositiveIntegerField(verbose_name='Номер квартиры',
                                            null=True, blank=True)
    floor = models.IntegerField(null=True, blank=True, verbose_name='Этаж')
    entrance = models.PositiveIntegerField(null=True, blank=True,
                                           verbose_name='Подъезд')
    intercom = models.PositiveIntegerField(null=True, blank=True,
                                           verbose_name='Домофон')
    postal_code = models.CharField(max_length=200, null=True, blank=True,
                                   verbose_name='Почтовый индекс')
    shipping_price = models.DecimalField(max_digits=7, decimal_places=2,
                                         null=True, blank=True,
                                         verbose_name='Стоимость доставки')
    comment = models.TextField(null=True, blank=True,
                               verbose_name='Комментарий для курьера')

    class Meta:
        ordering = ['order']
        verbose_name = 'Доставка'
        verbose_name_plural = 'Доставка'

    def __str__(self):
        return str(self.address)


class OrderUser(models.Model):
    class Meta:
        verbose_name = 'Данные получателя заказа'
        verbose_name_plural = 'Данные получателей заказов'

    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True,
                                 related_name='order_user',
                                 verbose_name='Пользователь')

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    phone_number = models.CharField(max_length=50)

    def __str__(self):
        return self.email


class Review(models.Model):
    """Модель отзыва на продукт."""
    product = models.ForeignKey(Product, on_delete=models.CASCADE,
                                verbose_name='Тип продукта',
                                related_name='reviews')
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True,
                               verbose_name='Покупатель',
                               related_name='reviews')
    title = models.CharField(max_length=200, null=True, blank=True,
                             verbose_name='Заголовок')
    rating = models.PositiveSmallIntegerField(null=True, blank=True,
                                              verbose_name='Рейтинг',
                                              validators=[MinValueValidator(1),
                                                          MaxValueValidator(5)])
    text = models.TextField(null=True, blank=True,
                            verbose_name='Текст отзыва')
    date_created = models.DateTimeField(auto_now_add=True, db_index=True,
                                        verbose_name='Дата создания')
    date_updated = models.DateTimeField(auto_now=True, db_index=True,
                                        verbose_name='Дата обновления')

    class Meta:
        ordering = ['-date_created']
        constraints = [
            models.UniqueConstraint(fields=['title', 'author'],
                                    name='unique review')
        ]
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

    def __str__(self):
        return str(self.title)


class ReviewUser(models.Model):
    class Meta:
        verbose_name = 'Данные пользователя, который оставил отзыв'
        verbose_name_plural = 'Данные пользователей, которые оставили отзывы'

    review = models.OneToOneField(Review, on_delete=models.CASCADE, null=True,
                                  related_name='review_user',
                                  verbose_name='Пользователь')

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    phone_number = models.CharField(max_length=50)

    def __str__(self):
        return self.email


class Comment(models.Model):
    """Модель комментария к отзыву на продукт."""
    review = models.ForeignKey(Review, on_delete=models.CASCADE,
                               verbose_name='Отзыв',
                               related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE,
                               verbose_name='Автор комментария')
    text = models.TextField(verbose_name='Комментарий к отзыву',
                            help_text='Введите текст комментария')
    date_created = models.DateTimeField(auto_now_add=True, db_index=True,
                                        verbose_name='Дата создания')
    date_updated = models.DateTimeField(auto_now=True, db_index=True,
                                        verbose_name='Дата обновления')

    class Meta:
        ordering = ('-date_created',)
        verbose_name = 'Комментарий к отзыву'
        verbose_name_plural = 'Комментарии к отзыву'

    def __str__(self):
        return str(self.author)
