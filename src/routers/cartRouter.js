const express = require('express');
const Cart = require('../models/cartModel');
const auth = require('../middleware/auth');

const cartRouter = new express.Router();

cartRouter.post('/cartItem', auth, async (req, res) => {
  // const item = new Cart(req.body);
  // const foundItem = await Cart.find({ _id: req.body._id, buyer: req.user._id });
  // if (foundItem) return;
  const item = new Cart({ ...req.body, buyer: req.user._id });
  try {
    await item.save();
    res.send(item);
  } catch (e) {
    console.log('error in post');
    res.send(e);
  }
});

cartRouter.get('/cart', auth, async (req, res) => {
  try {
    const cart = await Cart.find({ buyer: req.user._id });
    res.send(cart);
  } catch (error) {
    console.log('Error in get');
  }
});

cartRouter.patch('/cart/:id', async (req, res) => {
  try {
    const item = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) return res.status(404);
    res.send(item);
  } catch (error) {
    console.log('error in patch');
  }
});

cartRouter.delete('/cart/:id', async (req, res) => {
  try {
    const item = await Cart.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).send();
    item.count = 1;
    const itemsInCart = await Cart.find({ buyer: req.body.buyer });
    res.send(itemsInCart);
  } catch (error) {
    console.log('error in delete');
  }
});

module.exports = cartRouter;
