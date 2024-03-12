const mongoose = require("mongoose");
const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const queryObject = {};

    if (category) {
      queryObject.category = category;
    }

    const products = await Product.find(queryObject).sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllProducts, getSingleProduct };
