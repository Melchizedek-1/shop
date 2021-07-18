const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const bodyparser = require('body-parser')
const fileupload = require('express-fileupload')
const dotenv = require('dotenv');

const errorMiddleware = require('./middlewares/errors')
dotenv.config({ path: 'backend/config/config.env' });

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(fileupload());

const products = require('./routes/product');
const auth = require('./routes/auth');
const payment = require('./routes/payment');
const order = require('./routes/order');
const booking = require('./routes/booking');

app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', payment);
app.use('/api/v1', order);
app.use('/api/v1', booking);

app.use(errorMiddleware)

module.exports = app