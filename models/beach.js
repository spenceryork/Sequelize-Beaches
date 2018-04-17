'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: "beaches"
  });
  Beach.associate = function(models) {
    // associations can be defined here
    Beach.hasMany(models.Lifeguard, {
      foreignKey: 'beach_id'
    });
  };
  return Beach;
};