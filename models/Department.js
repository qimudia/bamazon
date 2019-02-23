module.exports = function(connection, Sequelize) {
  const Department = connection.define("Department", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    over_head_costs: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  });
  // Department has many Products
  Department.associate = function(models) {
    Department.hasMany(models.Product, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Department;
};
