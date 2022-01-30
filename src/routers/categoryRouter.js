const express = require('express');
const Category = require('../models/categoryModel');

const categoryRouter = express.Router();

categoryRouter.get('/category', (req, res) => {
  Category.find({})
    .then((categories) => res.send(categories))
    .catch((err) => console.log('Error'));
});

module.exports = categoryRouter;
