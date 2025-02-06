from django.db import models

class TransportOrder(models.Model):
    order_number = models.CharField(max_length=255, unique=True)
    origin = models.CharField(max_length=255)
    destination = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.order_number

class Waypoint(models.Model):
    WAYPOINT_TYPES = [
        ('Pickup', 'Pickup'),
        ('Delivery', 'Delivery'),
    ]
    order = models.ForeignKey(TransportOrder, related_name='waypoints', on_delete=models.CASCADE)
    type = models.CharField(max_length=20, choices=WAYPOINT_TYPES)
    location = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.type} - {self.location}"