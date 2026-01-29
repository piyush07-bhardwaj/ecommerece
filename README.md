🛒 E-Commerce Web Application

A full-stack E-commerce web application built using the MERN stack that allows users to browse products, manage their cart, and place orders through a modern, responsive interface. The project focuses on scalability, clean architecture, and real-world e-commerce features.

🚀 Features

User authentication and authorization (Login / Signup)

Product listing with search and filtering

Product details page

Add to cart & remove from cart functionality

Secure checkout process

Order management

Admin features for product management (Add / Update / Delete)

Responsive UI for desktop and mobile devices

🛠️ Tech Stack

Frontend

React.js

HTML5, CSS3, JavaScript

Axios for API calls

Backend

Node.js

Express.js

Database

MongoDB (NoSQL)

Other Tools

JWT for authentication

Git & GitHub for version control

📂 Project Structure
e-commerce-project/
│
├── frontend/        # React frontend
│   ├── src/
│   └── public/
│
├── backend/         # Node + Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── config/
│
├── package.json
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/piyush07-bhardwaj/ecommerece/

2️⃣ Install dependencies

Backend

cd backend
npm install


Frontend

cd frontend
npm install

▶️ Run the Application

Start Backend Server

cd backend
npm start


Start Frontend

cd frontend
npm start


The application will run on:

Frontend: http://localhost:3000

Backend: http://localhost:5000

🔐 Environment Variables

Create a .env file in the backend directory and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

📌 Future Enhancements

Payment gateway integration (Stripe / Razorpay)

Wishlist functionality

Product reviews and ratings

Email notifications

Deployment using Docker and cloud platforms

👨‍💻 Author

Piyush Bhardwaj
Software Engineering Student | Backend & Full-Stack Developer

📜 License

This project is licensed under the MIT License.
