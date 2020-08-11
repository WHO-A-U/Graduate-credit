const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PW,
    database: 'graduate-credit',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  test: {
    username: 'root',
    password: process.env.DB_PW,
    database: 'graduate-credit',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
  production: {
    username: 'root',
    password: process.env.DB_PW,
    database: 'graduate-credit',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
  },
};
