const asyncHandler = require('express-async-handler');
const Newsletter = require('../models/newsletterModel');

// Subscribe to newsletter
const subscribeNewsletter = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const existingSubscription = await Newsletter.findOne({ email });
  if (existingSubscription) {
    return res.status(400).json({ success: false, message: 'Email already subscribed' });
  }
  const subscription = new Newsletter({ email });
  await subscription.save();
  res.status(201).json({ success: true, data: subscription });
});

// Get all newsletter subscriptions
const getAllSubscriptions = asyncHandler(async (req, res) => {
  const subscriptions = await Newsletter.find();
  res.status(200).json({ success: true, data: subscriptions });
});

// Get a single subscription by ID
const getSubscriptionById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const subscription = await Newsletter.findById(id);
  if (!subscription) {
    return res.status(404).json({ success: false, message: 'Subscription not found' });
  }
  res.status(200).json({ success: true, data: subscription });
});

// Unsubscribe by ID
const unsubscribeById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedSubscription = await Newsletter.findByIdAndDelete(id);
  if (!deletedSubscription) {
    return res.status(404).json({ success: false, message: 'Subscription not found' });
  }
  res.status(200).json({ success: true, message: 'Unsubscribed successfully' });
});

module.exports = {
  subscribeNewsletter,
  getAllSubscriptions,
  getSubscriptionById,
  unsubscribeById,
};
