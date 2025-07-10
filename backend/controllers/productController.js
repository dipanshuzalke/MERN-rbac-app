const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const { role, _id } = req.user;

  let products;
  if (role === "admin") {
    products = await Product.find();
  } else if (role === "seller") {
    products = await Product.find({ createdBy: _id });
  } else if (role === "buyer") {
    products = await Product.find({ isPublic: true });
  }

  res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const { name, price, isPublic } = req.body;

  const product = new Product({
    name,
    price,
    isPublic,
    createdBy: req.user._id,
  });

  await product.save();
  res.status(201).json(product);
};

module.exports = { getProducts, createProduct };
