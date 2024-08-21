const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); // No need to call .config()
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnnection.js");
const newsletterRoutes = 
dotenv.config(); // Load environment variabless

connectDb();
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes 
app.use("/api/tours", require("./routes/tourRoutes"));
app.use("/api", require("./routes/paymentRoutes"));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/newsletters', require('./routes/newsletterRoutes'));

app.use(errorHandler); // Error handling middleware should be placed after all other middleware and routes

// Routes
app.get('/', (req, res) => {
    res.send("SBTT TOURS AND TRAVELS");
});



app.get("/api/getkey", (req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
  );

// start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
