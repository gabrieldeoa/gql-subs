const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./src/graphql/schema')

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});