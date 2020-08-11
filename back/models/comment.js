/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const Comment = sequelize.define(
    'Comment',
    {
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      anonymous: {
        type: DataTypes.INTEGER(1),
        allowNull: true
      }
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    }
  );
  Comment.associate = db => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
};
