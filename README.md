# 🍽️ AKIR Restaurant – Frontend

## 🚀 Overview
This is the frontend of the **AKIR Restaurant Website**, built with modern web technologies to deliver a fast, responsive, and visually engaging experience.

It includes menu browsing, reservation system, contact form, and interactive UI elements like a 3D hero section.

---

## ✨ Features

- ⚛️ Built with **React + TypeScript**
- ⚡ Powered by **Vite** (fast builds & HMR)
- 🎨 Styled using **Tailwind CSS** + **shadcn/ui**
- 📱 Fully responsive design
- 🎥 Smooth animations with **Framer Motion**
- 🧊 3D Hero Section using **Three.js / React Three Fiber**
- 🍔 Dynamic Menu Page
- 📩 Contact Form (connected to backend)
- 📅 Reservation System

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Three.js / React Three Fiber

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/anuaddagatla/AKIR_restaurant_Frontend.git

# Navigate to frontend
cd AKIR_Restaurant/Web_Restaurant_frontend-main

# Install dependencies
npm install

# Start development server
npm run dev

🌐 App will run at:

http://localhost:5175

⚙️ Environment Variables

Create a .env file in the root:

VITE_API_URL=http://localhost:4000

👉 This connects frontend to backend API.

🏗️ Build for Production
npm run build

Output will be in:

dist/
🚀 Deployment

Recommended platforms:

Vercel (best for React + Vite)
Netlify

After deployment, update your .env:

VITE_API_URL=https://your-backend-url.com

⚠️ Important Notes
Backend must be running for:
Reservation form
Contact form
If 3D is not supported on some devices, fallback UI is used
Ensure correct API URL in production
👨‍💻 Author

A Anusha Sri Lakshmi 

📧 Email: anu.addagatla18@gmail.com

📌 Future Improvements
Admin dashboard for reservations
Payment integration
Real-time booking system
Menu filtering & search