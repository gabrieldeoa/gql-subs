const graphQL = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphQL;

const hospital_bed_type = new GraphQLObjectType({
  name: 'hospital_bed',
  description: 'Informações do Dependentes',

  fields: () => {
    return {
      id: { type: GraphQLInt, description: 'Id do Leito' },
      situacao: { type: GraphQLString, description: 'Situação do leito' },
      status: { type: GraphQLInt, description: 'Status do leito' },
      observacao: { type: GraphQLString, description: 'Observação do leito' },
      criado_em: { type: GraphQLString, description: 'Data de criação do leito' },
      alterado_em: { type: GraphQLString, description: 'Data de alteração do leito' }
    }
  }
});

module.exports = hospital_bed_type;
