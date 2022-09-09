// SERVER CONFIGURATION

// Require Express:
const express = require('express');

// Require and init dotenv
    // -> terminal `npm i dotenv`
require('dotenv').config()

// Require Mongoose:
const mongoose = require('mongoose');

// port config - to be hidden later using .env
const PORT = 4000;

// Init express:
const app = express();

// Look for static files in public folder:
app.use(express.static("public"));

// Require express-ejs-layouts
    // -> terminal `npm i express-ejs-layouts`
const expressLayouts = require('express-ejs-layouts');

// ROUTE HANDLING BELOW:

// Import routes:
const instructionR = require('./routes/instructions');
const landingRouter = require('./routes/auth')

// Look into views:
app.use(expressLayouts);

// Session and passport for auth to go below:
// --

// Mount routes:
app.use('/', instructionR);
app.use('/', landingRouter);
app.set('view engine', 'ejs')

// render pages
app.set('view engine', 'ejs');
// Database connection
mongoose.connect("mongodb://localhost:27017/diyapp",  // hide later with .env
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('MongoDB connected!');
    }
);

app.listen(PORT, function() {
    console.log(`Hello-Express Application is running on port ${PORT}`);
})


