/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define(
    'Category',
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
  Category.associate = db => {
    db.Category.hasMany(db.Post);
  };
  return Category;
};
