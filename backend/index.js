const express = require('express');
const cors = require('cors');



const app = express();
const port = 5000;


// Middlewares
app.use(cors());
app.use(express.json());


// Routes

app.get('/' , (req , res) => {
    res.send("SBTT TOURS AND TRAVELS");
});


// start the server
app.listen(port ,() => {
    console.log(`Server is running at  http://localhost:${port}`)

})