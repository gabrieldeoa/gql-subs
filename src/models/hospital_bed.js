const sequelize = require('../database/connection');

const hospital_bed = sequelize.define('leitos', {
  id: {
    type: sequelize.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  situacao: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: sequelize.Sequelize.INTEGER,
    allowNull: false
  },  
  observacao: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  },
  criado_em: {
    type: sequelize.Sequelize.DATE,
    defaultValue: sequelize.Sequelize.NOW
  },
  alterado_em: {
    type: sequelize.Sequelize.DATE,
    defaultValue: sequelize.Sequelize.NOW
  }
},
{
  timestamps: true,
  createdAt: 'criado_em',
  updatedAt: 'alterado_em'
});

module.exports = hospital_bed;
