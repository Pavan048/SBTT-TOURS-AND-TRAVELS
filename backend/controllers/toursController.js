const asyncHandler = require("express-async-handler");
const Tour = require("../models/tour.js");

// @desc ....Get all tours
// @route .....GET /api/tours
// @access ......Public

const getAllTours = asyncHandler(async (req, res) => {
  const tours = await Tour.find();
  res.status(200).json({ success: true, data: tours });
});

// @desc ....Get single tour
// @route .....GET /api/tours/:id
// @access ......Public

const getSingleTour = asyncHandler(async (req, res) => {
  const tour = await Tour.findById(req.params.id);
  if (!tour) {
    res.status(404).json({ success: false, error: "Tour not found" });
    return;
  }
  res.status(200).json({ success: true, data: tour });
});

// @desc ....create a tour
// @route .....POST /api/tours
// @access ......Public

const createTour = asyncHandler(async (req, res) => {
  const tour = await Tour.create(req.body);
  res.status(201).json({ success: true, data: tour });
});

// @desc ....update a tour
// @route .....PUT /api/tours/:id
// @access ......Public

const updateTour = asyncHandler(async (req, res) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!tour) {
    res.status(404).json({ success: false, error: "Tour not found" });
    return;
  }
  res.status(200).json({ success: true, data: tour });
});

// @desc ....delete a tour
// @route .....DELETE /api/tours/:id
// @access ......Public

const deleteTour = asyncHandler(async (req, res) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);
  if (!tour) {
    res.status(404).json({ success: false, error: "Tour not found" });
    return;
  }
  res.status(200).json({ success: true, data: {} });
});


const getAllPackages = asyncHandler(async (req, res) => {
  const packageTours = await Tour.find({ packageTour: true });
  if (!packageTours || packageTours.length === 0) {
    return res.status(404).json({ success: false, error: 'No packages are available' });
  }
  res.json({
    success: true,
    data: packageTours,
  });
});


const searchTours = asyncHandler(async (req, res) => {
  const { destination, numberOfPeople, checkinDate, checkoutDate } = req.query;

  const query = {};

  if (destination) {
    query.name = { $regex: destination, $options: 'i' }; // Case-insensitive search
  }

  if (numberOfPeople) {
    query.maxGroupSize = { $gte: parseInt(numberOfPeople, 10) };
  }

  if (checkinDate && checkoutDate) {
    query.startDate = { $lte: new Date(checkoutDate) }; // Check if tour starts before or on the checkout date
    query.endDate = { $gte: new Date(checkinDate) }; // Check if tour ends after or on the checkin date
  }

  const tours = await Tour.find(query);

  if (!tours || tours.length === 0) {
    return res.status(404).json({ success: false, error: 'No tours found matching the criteria' });
  }

  res.json({
    success: true,
    data: tours,
  });
});





module.exports = {
  getAllTours,
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllPackages,
  searchTours,
};
