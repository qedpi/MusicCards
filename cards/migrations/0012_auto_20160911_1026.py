# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-11 01:26
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0011_auto_20160911_1016'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='card_rating',
            field=models.IntegerField(default=3),
        ),
        migrations.AlterField(
            model_name='card',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2016, 9, 11, 1, 26, 48, 942101)),
        ),
    ]
