module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Client;
};
