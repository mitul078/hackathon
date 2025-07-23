const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    image: [String],
    landingPage: String,
    info:String,
    imgSRC: String,
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
