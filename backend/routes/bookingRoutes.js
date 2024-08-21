const express = require('express');
const router = express.Router();
const {
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
} = require('../controllers/bookingController');


// Get all bookings
router.get('/', getAllBookings);

// Get a single booking by ID
router.get('/:id', getBookingById);

// Update a booking by ID
router.put('/:id', updateBookingById);

// Delete a booking by ID
router.delete('/:id', deleteBookingById);

module.exports = router;
