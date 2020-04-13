const graphQL = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = graphQL;
const { queries, mutations, subscriptions } = require('./index');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'RootQueryType',
  fields: () => {
    return {
      ...Object.assign({}, queries)
    }
  }
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'RootMutationType',
  fields: () => {
    return {
      ...Object.assign({}, mutations)
    }
  }
})

const RootSubscription = new GraphQLObjectType({
  name: 'RootSubscription',
  description: 'RootSubscription',
  fields: () => {
    return {
      ...Object.assign({}, subscriptions)
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
  subscription: RootSubscription
})