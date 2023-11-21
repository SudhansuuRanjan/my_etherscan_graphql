// Import necessary modules
const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const EtherDataSource = require("./datasource/ethDatasource");

// Load GraphQL schema from file
const typeDefs = importSchema("./schema.graphql");

// Load environment variables from .env file
require("dotenv").config();

// Define resolvers for GraphQL queries
const resolvers = {
  Query: {
    // Resolver for getting ether balance by address
    etherBalanceByAddress: (root, _args, { dataSources }) =>
      dataSources.ethDataSource.etherBalanceByAddress(),

    // Resolver for getting total supply of ether
    totalSupplyOfEther: (root, _args, { dataSources }) =>
      dataSources.ethDataSource.totalSupplyOfEther(),

    // Resolver for getting the latest Ethereum price
    latestEthereumPrice: (root, _args, { dataSources }) =>
      dataSources.ethDataSource.getLatestEthereumPrice(),

    // Resolver for getting block confirmation time
    blockConfirmationTime: (root, _args, { dataSources }) =>
      dataSources.ethDataSource.getBlockConfirmationTime(),
  },
};

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // Set up data sources
  dataSources: () => ({
    ethDataSource: new EtherDataSource(),
  }),
});

// Disable server timeout
server.timeout = 0;

// Start the server on port 9000 and log the URL
server.listen("9000").then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
