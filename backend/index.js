const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv'); // No need to call .config()
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnnection.js");

dotenv.config(); // Load environment variables

connectDb();
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/tours", require("./routes/tourRoutes"));
app.use(errorHandler); // Error handling middleware should be placed after all other middleware and routes

// Routes
app.get('/', (req, res) => {
    res.send("SBTT TOURS AND TRAVELS");
});

// start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
