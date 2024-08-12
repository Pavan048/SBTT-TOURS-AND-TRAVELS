const express = require("express");
const router = express.Router();

// import the functions from controllers

const {getAllTours,createTour,updateTour,deleteTour , getSingleTour , getAllPackages , searchTours} = require('../controllers/toursController');


// TourPackage Routes
router.get('/packages' , getAllPackages);
router.get('/search' , searchTours);





// Tour Routes


router.get('/' , getAllTours);
router.get('/:id' , getSingleTour);
router.post('/' , createTour);
router.put('/:id' , updateTour);
router.delete('/:id' , deleteTour);

// Add this to your main app file (e.g., app.js or index.js)


  


module.exports = router;