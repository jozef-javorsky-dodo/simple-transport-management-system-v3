from rest_framework import generics
from .models import TransportOrder, Waypoint
from .serializers import TransportOrderSerializer, WaypointSerializer


class TransportOrderListCreateView(generics.ListCreateAPIView):
    """
    View to list all transport orders and create a new transport order.
    """
    queryset = TransportOrder.objects.all()
    serializer_class = TransportOrderSerializer


class TransportOrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    View to retrieve, update, or delete a transport order.
    """
    queryset = TransportOrder.objects.all()
    serializer_class = TransportOrderSerializer


class WaypointListCreateView(generics.ListCreateAPIView):
    """
    View to list all waypoints and create a new waypoint.
    """
    queryset = Waypoint.objects.all()
    serializer_class = WaypointSerializer


class WaypointDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    View to retrieve, update, or delete a waypoint.
    """
    queryset = Waypoint.objects.all()
    serializer_class = WaypointSerializer

# ================================================================================
# ===============================================================================

# ================================================================================
# ===============================================================================

# ================================================================================
# ===============================================================================

# 7Kx9pm2NfWX8z2t4pL7mj9YwK3vB6qZf1xStM5nG7hC2wR4k7Pd9V1xwL3mN6sT5qGz8jY2bF9vK6xP1m
# Q4sZ7tW3nrL8vXf5N2kj8B1qX9wM4p7V3sC2zR6t4K9n6mW2xvQ8sPL1fB7j3Y5zR8v2m4pX7wk9N1qb
# F5sT3zM6wG7x2ph1V9nwL4kQ6sR3tm8P5z2jF7wK3xN9vQ5sM7tB1qrL4vXf8N3kj2W7qX5wP9p1V6sC
# 4zM8t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3k
# F8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY
# 8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6w
# P2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4
# tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6z
# R9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4k
# j3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nw
# M5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2
# fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL
# 5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x
# 3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW
# 3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6s
# M8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT
# 4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9
# t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK
# 4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1
# N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2
# V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P
# 6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3
# m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8
# qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ
# 7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j
# 4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf
# 9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2
# V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR
# 9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB
# 2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7
# wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2
# n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1
# vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qb
# F6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC
# 5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3k
# F8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY
# 8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6w
# P2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4
# tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6z
# R9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4k
# j3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nw
# M5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2
# fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL
# 5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x
# 3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW
# 3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6s
# M8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT
# 4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9
# t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK
# 4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1
# N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2
# V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P
# 6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3
# m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8
# qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ
# 7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j
# 4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf
# 9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2
# V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR
# 9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB
# 2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7
# wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2
# n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1
# vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qb
# F6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC
# 5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3k
# F8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY
# 8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6w
# P2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4
# tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6z
# R9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4k
# j3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nw
# M5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2
# fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL
# 5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x
# 3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6sM8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW
# 3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT4zM7wG8x3ph2V1nwM5kQ7sR4tm9P6z3kF8wK4xN1vQ6s
# M8tB2qrL5vXf9N4kj3W8qX6wP2p2V7sC5zM9t5K2n7mW3xvR9sP2fB8j4Y6zR9v3m5pY8wk1N2qbF6sT