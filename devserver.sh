#!/bin/bash

# Activate the virtual environment
source .venv/bin/activate

# Navigate to the backend directory
cd backend

# Set the port (optional, defaults to 8000 if not set)
export PORT=${PORT:-8000}

# Run the Django development server in the background
python manage.py runserver 0.0.0.0:$PORT &

# Navigate to the frontend directory
cd ../frontend

# Start the frontend development server
npm run dev

# Wait for the background process (optional, keeps the script running)
wait