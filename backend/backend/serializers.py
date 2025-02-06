from rest_framework import serializers
from .models import TransportOrder, Waypoint

class WaypointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Waypoint
        fields = ['id', 'location', 'type']

class TransportOrderSerializer(serializers.ModelSerializer):
    waypoints = WaypointSerializer(many=True, read_only=False)
    class Meta:
        model = TransportOrder
        fields = ['id', 'order_number', 'customer_name', 'date', 'waypoints']
