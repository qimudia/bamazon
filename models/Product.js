module.exports = function(connection, Sequelize) {
    const Product = connection.define('Product', {
        product_name: {
            type:Sequelize.STRING,
            allowNull: false
        },
        department_name: {
            type:Sequelize.STRING,
            allowNull: false
        },
        price: {
            type:Sequelize.DECIMAL,
            allowNull: false
        },
        stock_quantity: {
            type:Sequelize.INT,
            allowNull: false
        },
        product_sales: {
            type:Sequelize.DECIMAL,
            allowNull: true   

        }
    });

    //Product belongs to Department
    Product.associate = function(models) {
        Product.belongsTo(models.Department, {
          foreignKey: {
            allowNull: false
          }
        });
    }
        return Product;
}
    