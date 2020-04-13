const express = require('express')
const bodyParser = require('body-parser')
const { createServer } = require('http')
const { execute, subscribe } = require('graphql')
const { SubscriptionServer } = require('subscriptions-transport-ws')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

const schema = require('./src/graphql/schema');

const PORT = 3333;
const WS_BASE_URI = `ws://localhost:${PORT}/subscriptions`;

const app = express();

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: WS_BASE_URI
}))

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

const server = createServer(app);

server.listen(PORT, () => {
  console.log("Server started listening on " + PORT);
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema: schema     
    },
    {
      server: server,
      path: '/subscriptions'
    }
  );
})