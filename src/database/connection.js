const Sequelize = require('sequelize');
const configuration = require('../config/db_config');

const sequelize = new Sequelize(
  configuration.dbName,
  configuration.dbUser,
  configuration.dbPassword,
  {
    host: configuration.host,
    dialect: 'mysql',
    timezone: '+03:00',
    define: {
      freezeTableName: true,
      timestamps: false
    },
    pool: {
      max: 5,
      min: 2,
      acquire: 30000,
      idle: 10000
    },
    logging: (sql) => {
    },
    dialectOptions: {
      multipleStatements: true
    },
    operatorsAliases: false
  }
);

/* Custom action to helpes update */

sequelize.Model.findAndUpdate = async function (id, data, options) {
  let model = await this.findByPk(id)
  Object.keys(data).forEach(function (key) {
    if (data[key] === undefined) {
      delete data[key]
    }
  })

  return new Promise((resolve, reject) => {
    if (!model) {
      resolve(null)
    }
    model.update(data, options)
      .then((pRes) => {
        resolve(pRes)
      })
      .catch((pErr) => {
        resolve(model)
      })
  })
};

module.exports = sequelize;