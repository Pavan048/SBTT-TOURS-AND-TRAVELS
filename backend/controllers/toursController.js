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

  // Search by destination name
  if (destination) {
    query.name = { $regex: destination, $options: 'i' }; // Case-insensitive search
  }

  // Filter by maximum group size
  if (numberOfPeople) {
    const numberOfPeopleInt = parseInt(numberOfPeople, 10);
    if (isNaN(numberOfPeopleInt)) {
      return res.status(400).json({ success: false, error: 'Invalid number of people' });
    }
    query.maxGroupSize = { $gte: numberOfPeopleInt };
  }

  // Filter by dates
  if (checkinDate && checkoutDate) {
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    
    // Check if dates are valid
    if (isNaN(checkin.getTime()) || isNaN(checkout.getTime())) {
      return res.status(400).json({ success: false, error: 'Invalid date format' });
    }

    query.startDate = { $lte: checkout };
    query.endDate = { $gte: checkin };
  }

  try {
    const tours = await Tour.find(query);
    if (tours.length === 0) {
      return res.status(404).json({ success: false, error: 'No tours found matching the criteria' });
    }
    res.json({ success: true, data: tours });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
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
