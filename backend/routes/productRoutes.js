const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const checkRole = require("../middlewares/roleMiddleware");
const { getProducts, createProduct } = require("../controllers/productController");

// Accessible by all roles (with their specific filters)
router.get("/", protect, getProducts);

// Only admin or seller can create products
router.post("/", protect, checkRole("admin", "seller"), createProduct);

module.exports = router;
