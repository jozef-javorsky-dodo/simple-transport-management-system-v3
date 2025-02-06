from rest_framework import generics, status
from rest_framework.response import Response
from .models import TransportOrder, Waypoint
from .serializers import TransportOrderSerializer, WaypointSerializer


class TransportOrderListCreateView(generics.ListCreateAPIView):
    """
    View to list all transport orders and create a new transport order.
    """
    queryset = TransportOrder.objects.all()
    serializer_class = TransportOrderSerializer

    def create(self, request, *args, **kwargs):
        """
        Create a transport order and its associated waypoints.
        The waypoints data is expected to be in the 'waypoints' key of the request data.
        """
        waypoints_data = request.data.pop('waypoints', [])
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        transport_order = serializer.instance
        for waypoint_data in waypoints_data:
            Waypoint.objects.create(order=transport_order, **waypoint_data)

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class WaypointListCreateView(generics.ListCreateAPIView):
    """
    View to list all waypoints and create a new waypoint.
    """
    queryset = Waypoint.objects.all()
    serializer_class = WaypointSerializer
