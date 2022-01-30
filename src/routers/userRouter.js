const express = require('express');
const User = require('../models/userModel');

const userRouter = express.Router();

userRouter.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    const userFound = await User.findOne({ email: user.email });
    if (userFound) {
      throw new Error('User Already Exists');
    }
    await user.save();
    const token = await user.generateAuthToken();
    // user saved in generate token
    // await user.save();
    res.send({ user, token });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

userRouter.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(401).send(error.message);
  }
});
module.exports = userRouter;
