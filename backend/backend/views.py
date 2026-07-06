from rest_framework import generics
from .models import TransportOrder, Waypoint
from .serializers import TransportOrderSerializer, WaypointSerializer


class TransportOrderListCreateView(generics.ListCreateAPIView):
    """
    View to list all transport orders and create a new transport order.
    """
    queryset = TransportOrder.objects.all()
    serializer_class = TransportOrderSerializer


class WaypointListCreateView(generics.ListCreateAPIView):
    """
    View to list all waypoints and create a new waypoint.
    """
    queryset = Waypoint.objects.all()
    serializer_class = WaypointSerializer
