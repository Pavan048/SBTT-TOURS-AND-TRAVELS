const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: String, required: true },
  itinerary: { type: [String], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reviewDistance: { type: String, required: true },
  image: { type: String, required: true },
  maxGroupSize: { type: Number, required: true },
  packageTour: { type: Boolean, required: true },
  fare: { type: String, required: true },
  includes: { type: [String], required: true },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
