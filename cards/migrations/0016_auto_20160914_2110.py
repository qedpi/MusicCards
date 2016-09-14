# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-14 12:10
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0015_auto_20160914_2106'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2016, 9, 14, 12, 10, 35, 864505)),
        ),
        migrations.AlterField(
            model_name='card',
            name='visibility',
            field=models.CharField(choices=[('U', 'public'), ('S', 'sharable'), ('P', 'private')], default='S', max_length=1, verbose_name='Card Privacy Setting'),
        ),
    ]
