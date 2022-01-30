const mongoose = require('mongoose');
const Product = require('../models/productModel');
const Category = require('../models/categoryModel');
require('dotenv/config');

// mongodb://127.0.0.1:27017/products
console.log(process.env.DB_CONNECTION);
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, result) => {
    if (error) console.log('Error Occured');
    console.log('Connected to db');
  }
);

// Category.create({ category: 'All' }).catch((e) => console.log('error'));
// Category.insertMany([
//   { category: 'Shoes' },
//   { category: 'Upperwear' },
//   { category: 'Bottomwear' },
// ]).catch((e) => console.log('Error'));
// Product.create({
//   name: 'Nike Polark',
//   category: 'Shoes',
//   price: 5400,
//   img: '../Images/nike_shoes.jpg',
// }).catch((e) => console.log('error'));
// const shoes = new Product({
//   name: 'Adidas Hooter',
//   category: 'Shoes',
//   price: 2500,
// });

// shoes.save((error, result) => {
//   if (error) console.log('error', err);
// });

// Product.insertMany(
//   [
//     { name: 'Adidas Arc', category: 'Shoes', price: 2500 },
//     { name: 'Puma RSX', category: 'Shoes', price: 3599 },
//     { name: 'HRX t-shirt', category: 'Upperwear', price: 380 },
//     { name: 'UCB Shirt', category: 'Upperwear', price: 600 },
//     { name: 'Wrangler Jeans', category: 'Bottomwear', price: 4000 },
//     { name: 'Wrogn Trouser', category: 'Bottomwear', price: 2700 },
//     { name: 'Levis Jeans', category: 'Bottomwear', price: 4500 },
//     { name: 'VRX Shirt', category: 'Upperwear', price: 900 },
//     { name: 'Nike ZS', category: 'Shoes', price: 5000 },
//   ],
//   (err) => {
//     if (err) console.log('error');
//   }
// );
