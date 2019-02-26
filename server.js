//require dependencies
const express = require('express');
const path = require('path');
require("dotenv").config();

//creating a server
const app = express();
const db = require("./models");

// Set PORT to 8080
//const PORT = 8080;
var PORT = process.env.PORT || 3000;
   

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, './public')));


// Routes
// -----------------

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Syncs our database first
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});

