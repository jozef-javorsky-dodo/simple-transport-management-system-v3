from rest_framework import serializers
from .models import TransportOrder, Waypoint

class WaypointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Waypoint
        fields = ['id', 'location', 'type']

class TransportOrderSerializer(serializers.ModelSerializer):
    waypoints = WaypointSerializer(many=True, required=False)
    class Meta:
        model = TransportOrder
        fields = ['id', 'order_number', 'customer_name', 'date', 'waypoints']

    def create(self, validated_data):
        waypoints_data = validated_data.pop('waypoints', [])
        transport_order = TransportOrder.objects.create(**validated_data)
        for waypoint_data in waypoints_data:
            Waypoint.objects.create(order=transport_order, **waypoint_data)
        return transport_order
