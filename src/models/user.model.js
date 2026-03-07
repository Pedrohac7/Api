module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tenantId: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  });

  User.associate = (models) => {
    User.belongsTo(models.Tenant, { foreignKey: "tenantId" });
    User.hasMany(models.Client, { foreignKey: "userId" });
  };

  return User;
};
