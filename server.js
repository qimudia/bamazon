//require dependencies
const express = require('express');
const path = require('path');
//const db = require('./models');
//const employees = require('./app/data/employees.js');
//const employeesInfo = require('./app/public/js/survey.js');

//creating a server
const app = express();

// Set PORT to 8080
//const PORT = 8080;
var PORT = process.env.PORT || 3000;
   

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// -----------------

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);
require("dotenv").config();

// Starts the server...
app.listen(PORT, function(){
    console.log(`Server is listening on PORT: ${PORT}`);
});

// Syncing our sequelize models 
// =============================================================
/*db.sequelize.sync().then(function() {
  console.log('Database is synced!');

  db.Department.findAll({ include: [db.Product]})
    .then(function(rows) {
      console.log(JSON.stringify(rows,null,2));
    }).catch(function(error){
      console.log('Error:', error);
    });
});*/