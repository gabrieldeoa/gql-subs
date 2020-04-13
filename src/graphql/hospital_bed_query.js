const { GraphQLInt, GraphQLString } = require('graphql');

const hospital_bed_type = require('./hospital_bed_type');
const search_hospital_bed = require('../actions/search_hospital_bed');
const result_type_factory = require('./result_type_factory');

module.exports = {
  type: result_type_factory('hospital_bed_type', hospital_bed_type),
  description: 'Buscar os leitos',
  args: {
    id: { type: GraphQLInt, description: 'Id do Leito' },
    situacao: { type: GraphQLString, description: 'Situação do leito' },
    status: { type: GraphQLInt, description: 'Status do leito' },
    observacao: { type: GraphQLString, description: 'Observação do leito' }
  },
  resolve (parentValues, args) {
    return search_hospital_bed(args);
  }
}
