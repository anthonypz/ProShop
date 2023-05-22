import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5001;
import products from "./data/products.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}`
  )
);
