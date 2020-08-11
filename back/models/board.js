/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const Board = sequelize.define(
    'Board',
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci'
    }
  );

  Board.associate = db => {
    db.Board.hasMany(db.Post);
  };
  return Board;
};
