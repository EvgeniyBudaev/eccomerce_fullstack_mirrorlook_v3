# Generated by Django 3.2.5 on 2021-07-18 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='console',
            name='brand',
            field=models.CharField(blank=True, choices=[('Mirror Look', 'Mirror Look')], max_length=64, null=True, verbose_name='Бренд'),
        ),
        migrations.AddField(
            model_name='console',
            name='weight',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Вес'),
        ),
        migrations.AddField(
            model_name='mirror',
            name='brand',
            field=models.CharField(blank=True, choices=[('Mirror Look', 'Mirror Look')], max_length=64, null=True, verbose_name='Бренд'),
        ),
        migrations.AddField(
            model_name='mirror',
            name='frame_color',
            field=models.CharField(blank=True, choices=[('Серебро', 'Серебро')], max_length=64, null=True, verbose_name='Цвет рамы'),
        ),
        migrations.AddField(
            model_name='mirror',
            name='frame_material',
            field=models.CharField(blank=True, choices=[('Основа МДФ', 'Основа МДФ'), ('Полирезин', 'Полирезин')], max_length=64, null=True, verbose_name='Материал рамы'),
        ),
        migrations.AddField(
            model_name='mirror',
            name='height_with_frame',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Высота с рамой'),
        ),
        migrations.AddField(
            model_name='mirror',
            name='height_without_frame',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Высота без рамы'),
        ),
        migrations.AddField(
            model_name='mirror',
            name='is_faced',
            field=models.BooleanField(blank=True, default=True, null=True, verbose_name='Наличие фацета'),
        ),
        migrations.AddField(
            model_name='mirror',
            name='mirror_material',
            field=models.CharField(blank=True, choices=[('Влагостойкое серебряное зеркало', 'Влагостойкое серебряное зеркало')], max_length=64, null=True, verbose_name='Материал зеркала'),
        ),
        migrations.AddField(
            model_name='mirror',
            name='weight',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Вес'),
        ),
        migrations.AddField(
            model_name='mirror',
            name='weight_with_frame',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Ширина с рамой'),
        ),
        migrations.AddField(
            model_name='mirror',
            name='weight_without_frame',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True, verbose_name='Ширина без рамы'),
        ),
        migrations.AlterField(
            model_name='console',
            name='count_in_stock',
            field=models.PositiveIntegerField(blank=True, default=1, null=True, verbose_name='Кол-во товара'),
        ),
        migrations.AlterField(
            model_name='mirror',
            name='count_in_stock',
            field=models.PositiveIntegerField(blank=True, default=1, null=True, verbose_name='Кол-во товара'),
        ),
        migrations.AlterField(
            model_name='mirror',
            name='form',
            field=models.CharField(blank=True, choices=[('Прямоугольная', 'Прямоугольная'), ('Круглая', 'Круглая'), ('Овальная', 'Овальная')], max_length=64, null=True, verbose_name='Форма зеркала'),
        ),
    ]
