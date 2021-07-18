const express = require('express')
const router = express.Router()

const { newBooking } = require('../controllers/bookingController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route('/booking/new').post(isAuthenticatedUser, newBooking)

module.exports = router