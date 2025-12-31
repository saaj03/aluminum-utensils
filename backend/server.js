const express = require("express");
const cors = require("cors");
const products = require("./data");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/review/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  product.reviews.push(req.body);
  res.json({ message: "Review added" });
});

const PORT = 5001;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
