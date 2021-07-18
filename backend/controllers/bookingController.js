const Booking = require('../models/booking')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures')
const cloudinary = require('cloudinary')

exports.newBooking = catchAsyncErrors( async (req, res, next) => {

    req.body.user = req.user.id;
    const booking = await Booking.create(req.body);

    res.status(201).json({
        success: true,
        booking 
    })
}) 