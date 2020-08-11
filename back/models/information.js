/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  const Information = sequelize.define(
    'Information',
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      section: {
        type: DataTypes.INT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci',
    }
  );
  return Information;
};
