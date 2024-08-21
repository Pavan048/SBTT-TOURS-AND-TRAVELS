const express = require('express');
const router = express.Router();
const {
  subscribeNewsletter,
  getAllSubscriptions,
  getSubscriptionById,
  unsubscribeById,
} = require('../controllers/newsletterController');

// Subscribe to the newsletter
router.post('/', subscribeNewsletter);

// Get all subscriptions
router.get('/', getAllSubscriptions);

// Get a single subscription by ID
router.get('/:id', getSubscriptionById);

// Unsubscribe by ID
router.delete('/:id', unsubscribeById);

module.exports = router;
