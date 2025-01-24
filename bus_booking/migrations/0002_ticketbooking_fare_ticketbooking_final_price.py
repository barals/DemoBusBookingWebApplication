# Generated by Django 5.1.4 on 2025-01-11 10:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bus_booking', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticketbooking',
            name='fare',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='bus_booking.fare'),
        ),
        migrations.AddField(
            model_name='ticketbooking',
            name='final_price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
    ]
