'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comentario = sequelize.define('Comentario', {
    idComentario: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    comentario: DataTypes.TEXT,
    fecha: DataTypes.DATE,
    postId: DataTypes.INTEGER
  }, {
    timestamps: false,
  });
  return Comentario;
};