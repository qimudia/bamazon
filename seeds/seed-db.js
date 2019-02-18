// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================

db.sequelize.sync().then(function() {
 db.Department.bulkCreate([{
      name: 'Women',
      department_id: 1,
      over_head_costs: '2550.00'
    },{
      name: 'Men',
      department_id: 2,
      over_head_costs: '3925.00'
      
    },{
      name: 'Kids',
      department_id: 3,
      over_head_costs: '400.00'
      
    },{
      name: 'Teen',
      department_id: 4,
      over_head_costs: '2100.00'
  
  }]).then(function(response) {
    db.Product.bulkCreate([{
      product_name: 'Black Dress',
      department_name: 'Women',
      price: '50.59',
      stock_quantity: 20,
      product_sales: ''
    }, {
      product_name: 'Long Sleeve',
      department_name: 'Men',
      price: '99.59',
      stock_quantity: 20,
      product_sales: ''
    }, {
      product_name: 'Shirt',
      department_name: 'Kids',
      price: '25.99',
      stock_quantity: 10,
      product_sales: ''
    }, {
      product_name: 'Prom Dress',
      department_name: 'Teen',
      price: '89.59',
      stock_quantity: 30,
      product_sales: ''
    }, {
      product_name: 'Black Pant',
      department_name: 'Men',
      price: '59.85',
      stock_quantity: 15,
      product_sales: ''
  }, {
      product_name: 'Skirt',
      department_name: 'Women',
      price: '40.59',
      stock_quantity: 35,
      product_sales: ''
    },
   {
      product_name: 'Dress',
      department_name: 'Kids',
      price: '30.99',
      stock_quantity: 20,
      product_sales: ''
    },
   {
      product_name: 'Top',
      department_name: 'Teen',
      price: '26.39',
      stock_quantity: 20,
      product_sales: ''
    },
   {
      product_name: 'Jacket',
      department_name: 'Men',
      price: '150.59',
      stock_quantity: 20,
      product_sales: ''
    },
   {
      product_name: 'Jean Pant',
      department_name: 'Women',
      price: '49.59',
      stock_quantity: 20,
      product_sales: ''
  
    }]).then(function(){
      console.log('Data successfully added!');
    }).catch(function(error) {
      console.log('Error', error)
    });
  }).catch(function(error) {
    console.log('Error', error)
  });
});