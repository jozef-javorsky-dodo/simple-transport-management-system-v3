from django.db import models

class TransportOrder(models.Model):
    order_number = models.CharField(max_length=255)
    customer_name = models.CharField(max_length=255)
    date = models.DateField()

    def __str__(self):
        return self.order_number

class Waypoint(models.Model):
    WAYPOINT_TYPES = [
        ('pickup', 'Pickup'),
        ('delivery', 'Delivery'),
    ]
    order = models.ForeignKey(TransportOrder, related_name='waypoints', on_delete=models.CASCADE)
    type = models.CharField(max_length=50, choices=WAYPOINT_TYPES)
    location = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.type} - {self.location}"