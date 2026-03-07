module.exports = (sequelize, DataTypes) => {
  const Tenant = sequelize.define("Tenant", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Tenant.associate = (models) => {
    Tenant.hasMany(models.User, { foreignKey: "tenantId" });
    Tenant.hasMany(models.Client, { foreignKey: "tenantId" });
  };

  return Tenant;
};