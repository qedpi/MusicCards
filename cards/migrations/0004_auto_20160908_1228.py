# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-08 03:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0003_auto_20160908_1112'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card',
            name='review_time',
            field=models.DateTimeField(),
        ),
    ]
