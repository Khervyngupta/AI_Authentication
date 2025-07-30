# 🔐 MERN Stack Authentication System

A secure and scalable Full Stack Authentication system built using the MERN stack (MongoDB, Express, React, Node.js). It supports user registration, login, JWT-based authentication, protected routes, and full Forgot/Reset Password functionality via token-based verification.

---

## 🚀 Features

- ✅ User Signup & Login with JWT
- ✅ Forgot Password (email-based token system)
- ✅ Secure Password Hashing with Bcrypt
- ✅ Reset Password via token
- ✅ Protected Routes using JWT Middleware
- ✅ Clean Code Structure (MVC Pattern)
- ✅ MongoDB with Mongoose
- ✅ Environment Variables for secrets

---

## 🛠️ Tech Stack

- **Frontend**: React, Axios  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (Mongoose)  
- **Authentication**: JWT, Bcrypt  
- **Others**: dotenv, nodemon  

---

## 📁 Folder Structure

project-root/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env
│ └── server.js
├── frontend/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── App.js


---

## 🌐 API Endpoints

| Method | Endpoint                            | Description                  |
|--------|-------------------------------------|------------------------------|
| POST   | `/api/auth/register`                | Register a new user          |
| POST   | `/api/auth/login`                   | Login and receive JWT        |
| POST   | `/api/auth/forgot-password`         | Send reset link via email    |
| POST   | `/api/auth/reset-password/:token`   | Reset password using token   |

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/mern-auth-system.git
cd mern-auth-system

2. Backend Setup

cd backend
npm install


Create a .env file with the following:

MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_key


npm run dev


3. Frontend Setup

cd frontend
npm install
npm start

---

## 💡 Future Enhancements

### 1. Google / GitHub OAuth

### 2. Email Verification

### 3. Rate Limiting / Brute-force protection

### 4. Integration with real email provider (e.g., SendGrid, Nodemailer)

🙌 Author

Khervyn Gupta
Full Stack Developer | MERN | .NET | Open Source Enthusiast
📧 khervyngupta@gmail.com
💼 https://www.linkedin.com/in/khervyn-gupta/
🌐 https://khervynguptaportfolio.netlify.app/

📄 License

MIT License — Free to use and modify

⭐ If you found this useful, leave a star and share with others!

---
