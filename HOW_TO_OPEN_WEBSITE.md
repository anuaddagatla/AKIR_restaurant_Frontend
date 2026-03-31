<<<<<<< HEAD
# How to Open AKIR Restaurant Website

## Local frontend only
```bash
npm install
npm run dev
```

Then open `http://localhost:5175` in your browser.

## If you want to use a local backend too
1. Start the backend separately from the backend project on port `4000`.
2. In this frontend project, create a `.env.local` file:

```env
VITE_API_URL=http://localhost:4000
```

3. Run `npm run dev` and open `http://localhost:5175`.

## Important
- Do not open the backend URL as the website.
- The backend URL is only for API requests.
=======
# 🍽️ How to Open AKIR Restaurant Website

## 🚀 **Easy Method (Recommended)**

### **Option 1: Double-click the script**
1. Find the file `start-website.sh` in your project folder
2. Double-click it to run
3. The website will open automatically at `https://web-restaurant-backend-rexh.onrender.com`

### **Option 2: Run from terminal**
```bash
./start-website.sh
```

---

## 📋 **Manual Method**

### **Step 1: Start Backend**
```bash
cd backend
npm start
```

### **Step 2: Start Frontend (in new terminal)**
```bash
npm run dev
```

### **Step 3: Open Website**
- Go to: `https://web-restaurant-backend-rexh.onrender.com`
- Or click the link that appears in terminal

---

## 🌐 **Website Features**

### **What You Can Do:**
- ✅ **Make Reservations** - Book a table online
- ✅ **Contact Us** - Send messages and inquiries  
- ✅ **View Menu** - Browse our South Indian cuisine
- ✅ **See Location** - Find us at Benz Circle, Vijayawada

### **Contact Information:**
- 📍 **Address**: Benz Circle, Patamata Lanka, Vijayawada - 520010
- 📞 **Phone**: 9391885317
- 📧 **Email**: akirrestaurants@gmail.com

---

## 🔧 **Troubleshooting**

### **If website doesn't open:**
1. Make sure both servers are running
2. Check if ports 3001 and 5174 are free
3. Try refreshing the browser
4. Check terminal for error messages

### **If reservation form doesn't work:**
1. Check if backend is running on port 3001
2. Verify email configuration in backend/.env
3. Check Gmail credentials are correct

---

## 📱 **For Anyone to Use**

### **Simple Instructions:**
1. **Open Terminal/Command Prompt**
2. **Navigate to the project folder**
3. **Run**: `./start-website.sh`
4. **Wait for "Website is ready!" message**
5. **Click the link or go to**: `https://web-restaurant-backend-rexh.onrender.com`

### **That's it! The website is now running! 🎉**

---

## 📧 **Email Setup (Optional)**

To enable email notifications:
1. Edit `backend/.env` file
2. Add your Gmail credentials
3. Restart the backend server

**Note**: Website works without email setup (simulation mode)
>>>>>>> 7e3f1f14093c4c27fbc23a6f6f6349a0f94048f6
