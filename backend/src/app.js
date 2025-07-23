const express = require('express');
const productRoutes = require('./routes/product.routes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);
module.exports = app;
