module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    document: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Client.associate = (models) => {
    Client.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return Client;
};
