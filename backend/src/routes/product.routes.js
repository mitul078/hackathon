

const express = require('express');
const router = express.Router();
const productModel = require('../models/product.model');


router.post("/addProduct", async (req, res) => {

    const { name, image, info, landingPage, imgSRC } = req.body;

    await productModel.create({
        name,
        image,
        info,
        landingPage,
        imgSRC
    });

    res.status(200).json({ message: "Product Added Successfully" });
})

router.get("/getProducts", async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;