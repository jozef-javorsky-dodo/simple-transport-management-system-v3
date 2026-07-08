from django.contrib import admin
from django.urls import path
from .views import (
    TransportOrderListCreateView, 
    TransportOrderDetailView,
    WaypointListCreateView,
    WaypointDetailView
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('transport-orders/', TransportOrderListCreateView.as_view(), name='transport-order-list-create'),
    path('transport-orders/<int:pk>/', TransportOrderDetailView.as_view(), name='transport-order-detail'),
    path('waypoints/', WaypointListCreateView.as_view(), name='waypoint-list-create'),
    path('waypoints/<int:pk>/', WaypointDetailView.as_view(), name='waypoint-detail'),
]