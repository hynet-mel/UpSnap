# Generated by Django 3.2.7 on 2021-09-28 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wol', '0011_settings_scan_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='device',
            name='name',
            field=models.SlugField(default='Unknown', max_length=100),
        ),
    ]