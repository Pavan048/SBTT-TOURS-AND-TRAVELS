const asyncHandler = require('express-async-handler');
const Payment = require('../models/paymentModel');

// Create a new booking
const createBooking = asyncHandler(async (req, res) => {
  const booking = new Payment(req.body);
  await booking.save();
  res.status(201).json({ success: true, data: booking });
});

// Get all bookings
const getAllBookings = asyncHandler(async (req, res) => {
  const bookings = await Payment.find();
  res.status(200).json({ success: true, data: bookings });
});

// Get a single booking by ID
const getBookingById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const booking = await Payment.findById(id);
  if (!booking) {
    return res.status(404).json({ success: false, message: 'Booking not found' });
  }
  res.status(200).json({ success: true, data: booking });
});

// Update a booking by ID
const updateBookingById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedBooking = await Payment.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
  if (!updatedBooking) {
    return res.status(404).json({ success: false, message: 'Booking not found' });
  }
  res.status(200).json({ success: true, data: updatedBooking });
});

// Delete a booking by ID
const deleteBookingById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedBooking = await Payment.findByIdAndDelete(id);
  if (!deletedBooking) {
    return res.status(404).json({ success: false, message: 'Booking not found' });
  }
  res.status(200).json({ success: true, message: 'Booking deleted successfully' });
});

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
};
