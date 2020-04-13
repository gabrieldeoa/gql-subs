const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')

module.exports = (pName, pType) => {
  return new GraphQLObjectType({
    name: pName,
    description: `Resultado de uma Busca de ${pName}`,
    fields () {
      return {
        rows: { type: GraphQLList(pType), description: 'Linhas com o Resultado' },
        count: { type: GraphQLInt, description: 'Total de Linhas' }
      }
    }
  })
};
