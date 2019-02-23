// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================

db.sequelize.sync({ force: true }).then(function() {
 db.Department.bulkCreate([{
      name: 'Women',
      over_head_costs: 2550.00
    },{
      name: 'Men',
      over_head_costs: 3925.00
    },{
      name: 'Kids',
      over_head_costs: 400.00
    },{
      name: 'Teen',
      over_head_costs: 2100.00
  }]).then(function(response) {
    db.Product.bulkCreate([{
      product_name: 'Black Dress',
      department_name: 'Women',
      DepartmentId: 1,
      price: 50.59,
      stock_quantity: 20
    }, {
      product_name: 'Long Sleeve',
      department_name: 'Men',
      DepartmentId: 2,
      price: 99.59,
      stock_quantity: 20
    }, {
      product_name: 'Shirt',
      department_name: 'Kids',
      DepartmentId: 3,
      price: 25.99,
      stock_quantity: 10
    }, {
      product_name: 'Prom Dress',
      department_name: 'Teen',
      DepartmentId: 4,
      price: 89.59,
      stock_quantity: 30
    }, {
      product_name: 'Black Pant',
      department_name: 'Men',
      DepartmentId: 2,
      price: 59.85,
      stock_quantity: 15
  }, {
      product_name: 'Skirt',
      department_name: 'Women',
      DepartmentId: 1,
      price: 40.59,
      stock_quantity: 35
      
    },
   {
      product_name: 'Dress',
      department_name: 'Kids',
      DepartmentId: 3,
      price: 30.99,
      stock_quantity: 20
    
    },
   {
      product_name: 'Top',
      department_name: 'Teen',
      DepartmentId: 4,
      price: 26.39,
      stock_quantity: 20
     
    },
   {
      product_name: 'Jacket',
      department_name: 'Men',
      DepartmentId: 2,
      price: 150.59,
      stock_quantity: 20
      
    },
   {
      product_name: 'Jean Pant',
      department_name: 'Women',
      DepartmentId: 1,
      price: 49.59,
      stock_quantity: 20
    }]).then(function () {
      db.sequelize.close();
    });
  });
});