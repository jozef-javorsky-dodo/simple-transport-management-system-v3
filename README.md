# Simple Transport Management System, V3

## Overview

This project is a simple Transport Management System (TMS) designed to manage transport orders and their associated waypoints. It allows users to create, list, and potentially manage transport orders, including details such as order number, customer name, date, and waypoints (pickup/delivery locations).

## Purpose

The primary purpose of this application is to provide a basic framework for managing transport orders. It serves as a starting point for a more complex TMS and can be extended with additional features such as:

* Real-time tracking
* Driver management
* Route optimization
* Reporting

## Technologies Used

This project is built using a combination of modern web development technologies, including:

**Frontend:**

* **Vue.js:** A progressive JavaScript framework used for building the user interface.
* **Vite:** A build tool that provides a fast and efficient development environment.
* **TypeScript:** A superset of JavaScript that adds static typing.
* **Vue Router:** for client side routing.
* **Axios:** to make HTTP requests.

**Backend:**

* **Django:** A high-level Python web framework that encourages rapid development and clean, pragmatic design.
* **Django REST Framework:** A powerful and flexible toolkit for building Web APIs.
* **SQLite:** A self-contained, serverless, zero-configuration, transactional SQL database engine.

### Accessing the Application

* **Frontend:** Once the frontend development server is running, you can access the application in your browser at `http://localhost:5173/`.
* **Backend:** The backend API will be available at `http://127.0.0.1:8000/`.

## API Endpoints

The backend provides the following API endpoints:

* `GET /transport-orders/`: List all transport orders.
* `POST /transport-orders/`: Create a new transport order (including waypoints).
* `GET /waypoints/`: List all waypoints.
* `POST /waypoints/`: Create a new waypoint.
