const { ApolloServer  } = require('apollo-server');
const userResolvers = require('./user/resolvers/userResolvers');
const userSchema = require('./user/schema/user.graphql');

const typeDefs = [
  userSchema
]
const resolvers = [userResolvers]

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({port: 4001}).then(
  ({url}) => {
    console.log(`Servidor running on port 4001`);
  }
);