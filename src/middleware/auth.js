const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv/config');

const auth = async (req, res, next) => {
  try {
    const token = req.header('auth');
    const decode = jwt.verify(token, process.env.JWT_KEY);

    const user = await User.findOne({
      _id: decode._id,
      'tokens.token': token,
    });
    if (!user) throw new Error();
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send('Please Authenticate..');
  }
};

module.exports = auth;
