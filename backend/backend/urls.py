from django.contrib import admin
from django.urls import path
from .views import TransportOrderListCreateView, WaypointListCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('transport-orders/', TransportOrderListCreateView.as_view(), name='transport-order-list-create'),
    path('waypoints/', WaypointListCreateView.as_view(), name='waypoint-list-create'),
]