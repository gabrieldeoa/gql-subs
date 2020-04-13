require('dotenv').config();

module.exports = {
  host: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASS
};