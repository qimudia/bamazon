module.exports = function(connection, Sequelize) {
    const Department = connection.define('Department ', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          department_id: {
            type: Sequelize.INT,
            allowNull: false
          },
          over_head_costs: {
            type: Sequelize.DECIMAL,
            allowNull: false
          }
        });
         // Department has many Products
        Department .associate = function(models) {
            Department .hasmany(models.Product, {
        foreignKey: {
          allowNull: false
        }
      });
    }
    
    return Department ;
  }

  