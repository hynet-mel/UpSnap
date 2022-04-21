# Generated by Django 3.2.12 on 2022-03-12 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wol', '0012_alter_device_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Port',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.PositiveIntegerField()),
                ('name', models.SlugField()),
            ],
        ),
        migrations.RenameField(
            model_name='settings',
            old_name='enable_notifications',
            new_name='notifications',
        ),
        migrations.RemoveField(
            model_name='device',
            name='scheduled_wake',
        ),
        migrations.RemoveField(
            model_name='settings',
            name='enable_console_logging',
        ),
        migrations.AddField(
            model_name='device',
            name='shutdown_cmd',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='settings',
            name='interval',
            field=models.PositiveSmallIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='device',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='settings',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='websocket',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AddField(
            model_name='device',
            name='port',
            field=models.ManyToManyField(blank=True, to='wol.Port'),
        ),
    ]