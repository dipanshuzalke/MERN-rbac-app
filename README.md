# 🔐 MERN Stack Role-Based Access Control (RBAC) App

A full-stack web application built using the **MERN Stack**:  
**MongoDB + Express.js + React + Node.js**  
This project features **JWT-based authentication**, **role-based access control**, and dynamic product visibility based on user roles (`admin`, `seller`, and `buyer`).

---

## 🌐 Live Demo

🔗 **Frontend**: [https://mern-rbac-app.vercel.app](https://mern-rbac-app.vercel.app)  
🔗 **Backend**: [https://mern-rbac-app.onrender.com](https://mern-rbac-app.onrender.com)

---

## 🚀 Features

- ✅ JWT-based **Login & Signup**
- ✅ **Role-Based Dashboard**
  - 👑 Admin → All Products
  - 🛒 Seller → Only their own products
  - 👤 Buyer → Only public products
- ✅ **Protected Routes** with React
- ✅ Clean UI with **Tailwind CSS**
- ✅ Toast notifications using **react-hot-toast**
- ✅ Deployment using **Vercel** (Frontend) & **Render** (Backend)

---

## 🏗️ Tech Stack

| Layer      | Tech                     |
|------------|--------------------------|
| Frontend   | React + Vite             |
| UI         | Tailwind CSS + shadcn/ui |
| State Mgmt | useState / useEffect     |
| Backend    | Node.js + Express.js     |
| Auth       | JWT (JSON Web Tokens)    |
| Database   | MongoDB Atlas            |

---

## 📦 Installation

### 🔧 Setup Instructions

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-rbac-app.git
cd mern-rbac-app
```

#### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=10000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
node server.js
```

#### 3. Setup the Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=https://mern-rbac-app.onrender.com/api
```

Start the frontend:

```bash
npm run dev
```

---

## 🗂️ Project Structure

```
mern-rbac-app/
├── frontend/              # React Frontend (Tailwind + Toast + Protected Routes)
│   ├── src/
│   ├── public/
│   ├── .env
│   └── ...
├── backend/               # Express Backend (JWT Auth + MongoDB)
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   └── server.js
└── README.md
```

---

## 🧪 API Endpoints

| Method | Endpoint           | Description                         |
|--------|--------------------|-------------------------------------|
| POST   | `/api/auth/signup` | Register a new user with role       |
| POST   | `/api/auth/login`  | Login and receive JWT token         |
| GET    | `/api/products`    | Get products based on user role     |
| POST   | `/api/products`    | Add a product (admin/seller only)   |

---

## 🔗 Deployment Links

- 🌍 **Frontend**: [https://mern-rbac-app.vercel.app](https://mern-rbac-app.vercel.app)  
- ⚙️ **Backend**: [https://mern-rbac-app.onrender.com](https://mern-rbac-app.onrender.com)

---

## 🙋‍♂️ Author

**Your Name** – [Dipanshu Zalke](dipanshuzalke.xyz)
