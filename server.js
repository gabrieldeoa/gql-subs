const express = require('express');
const { execute, subscribe } = require('graphql');
const { createServer } = require('http');
const express_graphql = require('express-graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');

const schema = require('./src/graphql/schema');

const PORT = 3333;
const WS_BASE_URI = `ws://localhost:${PORT}`;

const app = express();

app.use('/graphql',
  express_graphql({
    schema: schema,
    graphiql: true,
    subscriptionsEndpoint: WS_BASE_URI
  })
);

const webServer = createServer(app);

webServer.listen(PORT, () => {
  console.log(`GraphQL is now running on http://localhost:${PORT}`);
  console.log(`Subscriptions are running on ${WS_BASE_URI}/subscriptions`);
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema
    },
    {
      server: webServer,
      path: '/subscriptions',
    }
  );
});