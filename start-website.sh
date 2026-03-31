#!/bin/bash
<<<<<<< HEAD
set -e

echo "🍽️  Starting AKIR Restaurant frontend..."
npm run dev
=======

echo "🍽️  Starting AKIR Restaurant Website..."
echo ""

# Check if backend is running
if ! curl -s https://web-restaurant-backend-rexh.onrender.com/health > /dev/null 2>&1; then
    echo "🚀 Starting Backend Server..."
    cd backend && npm start &
    BACKEND_PID=$!
    sleep 3
    echo "✅ Backend started on port 3001"
else
    echo "✅ Backend already running on port 3001"
fi

# Check if frontend is running
if ! curl -s https://web-restaurant-backend-rexh.onrender.com > /dev/null 2>&1; then
    echo "🌐 Starting Frontend Server..."
    npm run dev &
    FRONTEND_PID=$!
    sleep 5
    echo "✅ Frontend started on port 5174"
else
    echo "✅ Frontend already running on port 5174"
fi

echo ""
echo "🎉 AKIR Restaurant Website is ready!"
echo "📍 URL: https://web-restaurant-backend-rexh.onrender.com"
echo ""
echo "📧 Email notifications: akirrestaurants@gmail.com"
echo "📞 Phone: 9391885317"
echo "📍 Address: Benz Circle, Patamata Lanka, Vijayawada - 520010"
echo ""
echo "🌐 Opening website in browser..."
open https://web-restaurant-backend-rexh.onrender.com

echo "Press Ctrl+C to stop both servers"

# Wait for user to stop
wait
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
