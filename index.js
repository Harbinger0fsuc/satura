require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3500;
const productRoutes = require("./routes/productRoutes");

// const Product = require("./models/productModel");
// const productsJson = require("./products.json");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/products", productRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "satura",
  })
  .then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`PORT IS ${PORT}`);
    });
  })
  // .then(() => {
  //   Product.create(productsJson);
  // })
  .catch((err) => {
    console.log(err);
  });
