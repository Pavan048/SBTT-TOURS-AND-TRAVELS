const Razorpay = require('razorpay');
const dotenv = require('dotenv');
const crypto = require('crypto');
const Payment = require('../models/paymentModel'); // Corrected import statement
const { log } = require('console');

dotenv.config();

// Instance
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

const checkout = async (req, res) => {
  try {
    const { amount, tourId, name, email, contact, numberOfPeople } = req.body;

    // Validate input
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ success: false, message: "Invalid amount" });
    }
    if (!tourId || !name || !email || !contact || !numberOfPeople) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const options = {
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: `receipt_${new Date().getTime()}`,
    };

    const order = await instance.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const paymentVerification = async (req, res) => {
  try {
    // Extract query parameters
    const { tourId, numberOfPeople, amount, name, email, contact } = req.query;
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Validate input
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature ||
        !tourId || !numberOfPeople || !name || !email || !contact || !amount) {
      return res.status(400).json({ success: false, message: "Invalid payment details" });
    }

    // Verify payment signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Save payment details to the database
      await Payment.create({
        tourId,
        name,
        email,
        contact,
        numberOfPeople,
        amountPaid: Number(amount),
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        paymentStatus: 'Paid',
      });

      res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
    } else {
      res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Export the functions
module.exports = {
  checkout,
  paymentVerification,
};
