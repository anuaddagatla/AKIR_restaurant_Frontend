#!/bin/bash
<<<<<<< HEAD
echo "This frontend project no longer tries to start the backend automatically."
echo "Start the backend separately from the backend project, then run: npm run dev"
=======

# Start Backend Server
echo "🚀 Starting AKIR Restaurant Backend..."
cd backend && npm start &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Start Frontend Server
echo "🌐 Starting AKIR Restaurant Frontend..."
npm run dev &
FRONTEND_PID=$!

echo "✅ Both servers are starting..."
echo "📧 Backend API: https://web-restaurant-backend-rexh.onrender.com"
echo "🌐 Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to stop
wait
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
