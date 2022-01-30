const express = require('express');
const Product = require('../models/productModel');

const productRouter = new express.Router();
//  If you want to use access key the this is it---
//const accessKey = 'productKey';

productRouter.get('/products', (req, res) => {
  // if (accessKey !== req.headers.auth) return;
  Product.find({})
    .then((products) => {
      res.send(products);
    })
    .catch((error) => {
      console.log('Error Occured');
    });
});

productRouter.get('/products/:id', (req, res) => {
  const _id = req.params.id;
  Product.findById(_id)
    .then((product) => {
      if (!product) res.status(404).send();
      res.send(product);
    })
    .catch((err) => console.log('Error Occured'));
});

module.exports = productRouter;
