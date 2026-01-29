# 🛒 E-Commerce Web Application

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Framework-Express-lightgrey)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

A full-stack **E-Commerce Web Application** built using the **MERN stack**.  
This project enables users to browse products, manage their shopping cart, and place orders through a secure and responsive interface, following real-world e-commerce workflows.

---

## 📌 About the Project

This project demonstrates end-to-end **full-stack web development** using modern technologies. It focuses on scalable architecture, RESTful APIs, secure authentication, and a clean user experience. The application also includes admin-level functionality for managing products.

---

## 🚀 Features

- User authentication and authorization (Login / Signup)
- Product listing with search and filtering
- Product details page
- Add to cart & remove from cart functionality
- Secure checkout process
- Order management system
- Admin dashboard for product management (Add / Update / Delete)
- Fully responsive UI (desktop & mobile)

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Tools & Technologies
- JWT Authentication
- RESTful APIs
- Git & GitHub
- Postman

---

## 📂 Project Structure

e-commerce-project/
│
├── frontend/
│ ├── src/
│ └── public/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── config/
│
├── package.json
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/piyush07-bhardwaj/ecommerece/
cd ecommerece
2️⃣ Install dependencies
Backend

cd backend
npm install
Frontend

cd frontend
npm install
▶️ Run the Application
Start Backend Server

npm start
Start Frontend Server

npm start
Frontend: http://localhost:3000

Backend: http://localhost:5000

🔐 Environment Variables
Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
🧪 API Highlights
GET /products – Fetch all products

POST /users/login – User authentication

POST /orders – Place an order

POST /products – Admin product creation

🚧 Future Enhancements
Payment gateway integration (Stripe / Razorpay)

Wishlist functionality

Product reviews and ratings

Order tracking

Cloud deployment (AWS / Vercel)

👨‍💻 Author
Piyush Bhardwaj
Software Engineering Student | Full-Stack Developer
GitHub | LinkedIn

📜 License
This project is licensed under the MIT License.
