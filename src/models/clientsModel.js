module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // Não validar por email e sim pelo id. Pode quebrar silencisamente
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tenantId: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  });

  Client.associate = (models) => {
    Client.belongsTo(models.User, { foreignKey: "userId" });
    Client.belongsTo(models.Tenant, { foreignKey: "tenantId" });
  };

  return Client;
};
