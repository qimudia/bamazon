module.exports = function(connection, Sequelize) {
  const Product = connection.define("Product", {
    product_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    department_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0.0
    },
    stock_quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
   });

  //Product belongs to Department
  Product.associate = function(models) {
    Product.belongsTo(models.Department, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };
  return Product;
};
