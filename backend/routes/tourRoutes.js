const express = require("express");
const router = express.Router();

// import the functions from controllers

const {getAllTours,createTour,updateTour,deleteTour , getSingleTour} = require('../controllers/toursController');


// Tour Routes


router.get('/' , getAllTours);
router.get('/:id' , getSingleTour);
router.post('/' , createTour);
router.put('/:id' , updateTour);
router.delete('/:id' , deleteTour);



module.exports = router;