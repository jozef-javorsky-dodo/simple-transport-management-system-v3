from rest_framework import serializers
from django.db import transaction
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

    @transaction.atomic
    def create(self, validated_data):
        waypoints_data = validated_data.pop('waypoints', [])
        transport_order = TransportOrder.objects.create(**validated_data)
        for waypoint_data in waypoints_data:
            Waypoint.objects.create(order=transport_order, **waypoint_data)
        return transport_order

    @transaction.atomic
    def update(self, instance, validated_data):
        waypoints_data = validated_data.pop('waypoints', None)
        
        # Update TransportOrder fields
        instance.order_number = validated_data.get('order_number', instance.order_number)
        instance.customer_name = validated_data.get('customer_name', instance.customer_name)
        instance.date = validated_data.get('date', instance.date)
        instance.save()

        # Update waypoints if provided (replace all)
        if waypoints_data is not None:
            instance.waypoints.all().delete()
            for waypoint_data in waypoints_data:
                Waypoint.objects.create(order=instance, **waypoint_data)
                
        return instance
