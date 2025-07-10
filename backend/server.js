const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Load environment variables and connect to DB
dotenv.config();
connectDB();

// Import routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes"); // We'll add later

const app = express();

app.use(cors({
  origin: "https://mern-rbac-app.vercel.app/", // Vercel frontend URL
  credentials: true
}));
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes); // Placeholder, we’ll build it soon

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
