const mongoose = require('mongoose');
const User = require('./userModel');

const cartSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  count: Number,
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: User },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
