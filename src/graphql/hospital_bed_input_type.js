const { GraphQLString, GraphQLInt, GraphQLInputObjectType } = require('graphql')

const hospital_bed_input_type = new GraphQLInputObjectType({
  name: 'hospital_bed_input_type',
  description: 'Informações de Input de leitos',
  fields: () => ({
    id: { type: GraphQLInt, description: 'Id do Leito' },
    situacao: { type: GraphQLString, description: 'Situação do leito' },
    status: { type: GraphQLInt, description: 'Status do leito' },
    observacao: { type: GraphQLString, description: 'Observação do leito' }
  })
})

module.exports = hospital_bed_input_type
