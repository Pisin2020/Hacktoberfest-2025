#!/bin/bash

echo "Starting Web App with Backend..."
echo

echo "Starting MongoDB (make sure MongoDB is installed)..."
# Start MongoDB in background
mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db 2>/dev/null || echo "MongoDB might already be running or not installed locally"

echo
echo "Starting Backend Server..."
cd backend
npm run dev &
BACKEND_PID=$!
cd ..

echo
echo "Starting Frontend Server..."
npm start &
FRONTEND_PID=$!

echo
echo "All servers are starting up!"
echo "- Frontend: http://localhost:3000"
echo "- Backend: http://localhost:5000"
echo "- API: http://localhost:5000/api"
echo
echo "Press Ctrl+C to stop all servers"

# Function to handle script termination
cleanup() {
    echo
    echo "Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Wait for processes
wait