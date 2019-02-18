//Routes
const path = require('path');

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users 'visit' a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
  
    // If no matching route is found default to home
    app.get('/manager', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/manager.html'));
    });

    app.get('/supervisor', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/supervisor.html'));
    });

    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
  };
  