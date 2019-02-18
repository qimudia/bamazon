

// Dependencies
// =============================================================

// Requiring our models
const db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Department
  app.get('/api/Department', function(req, res) {
    db.Department.findAll({}).then(function(dbDepartment) {
      res.json(dbDepartment);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // Get route for retrieving a single Department
  app.get('/api/Department/:id', function(req, res) {
    db.Department.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbDepartment) {
      res.json(dbDepartment);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // POST route for saving a new Department
  app.post('/api/Department', function(req, res) {
    db.Department.create(req.body).then(function(dbDepartment) {
      res.json(dbDepartment);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // PUT route for updating Department
  app.put('/api/Department/:id', function(req, res) {
    db.Department.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
    }).then(function(dbDepartment) {
      res.json(dbDepartment);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // DELETE route for deleting Department
  app.delete('/api/Department/:id', function(req, res) {
    db.Department.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDepartment) {
      res.json(dbDepartment);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

};


module.exports = function(app) {

  // GET route for retrieving all Product
  app.get('/api/Product', function(req, res) {
    db.Product.findAll({}).then(function(dbProduct) {
      res.json(dbProduct);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // GET route for retrieving a single specified Product
  app.get('/api/Product/:id', function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbProduct) {
      res.json(dbProduct);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // POST route for adding new Product
  app.post('/api/Product', function(req, res) {
    db.Product.create(req.body).then(function(dbProduct) {
      res.json(dbProduct);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // PUT route for updating Product
  app.put('/api/Product/:id', function(req, res) {
    db.Product.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
    }).then(function(dbProduct) {
      res.json(dbProduct);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // DELETE route for deleting Product
  app.delete('/api/Product/:id', function(req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProduct) {
      res.json(dbProduct);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

};
