const express = require('express');
const productRouter = require('./routers/productRouter');
const cors = require('cors');
const categoryRouter = require('./routers/categoryRouter');
const userRouter = require('./routers/userRouter');
const cartRouter = require('./routers/cartRouter');
require('./database/mongoose');
require('dotenv/config');

const app = express();

app.use(express.json());
app.use(cors());
app.use(productRouter);
app.use(categoryRouter);
app.use(userRouter);
app.use(cartRouter);

app.listen(
  process.env.PORT,
  console.log(`Server listening on port ${process.env.PORT}`)
);
