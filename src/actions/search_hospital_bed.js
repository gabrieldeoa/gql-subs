const hospital_bed = require('../models/hospital_bed');
const { Op } = require('sequelize');

module.exports = (criterias) => {

  let where = {}

  if (criterias.id) {
    where.id = criterias.id
  }

  if (criterias.situacao) {
    where.situacao = {
      [Op.like]: `%${criterias.situacao}%`
    }
  }

  if (criterias.status) {
    where.id = criterias.id
  }

  if (criterias.observacao) {
    where.observacao = {
      [Op.like]: `%${criterias.observacao}%`
    }
  }

  return hospital_bed.findAndCountAll({
    where,
    order: [['id', 'ASC']]
  });
};
