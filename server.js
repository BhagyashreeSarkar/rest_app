const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

const fileUpload = require('express-fileupload');
app.use(fileUpload());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '150mb'}));

// Configuring the database
const dbConfig = require('./config/mongocon.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)

require('./config/routes.js')(app);

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Love yourself."});
});

// listen for requests
app.listen(3000, () => {
    console.log("The magic happens on port 3000");
});
