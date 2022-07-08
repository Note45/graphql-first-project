const { ApolloServer  } = require('apollo-server');
const UsersAPI = require('./user/datasource/user');
const userResolvers = require('./user/resolvers/userResolvers');
const userSchema = require('./user/schema/user.graphql');

const typeDefs = [
  userSchema
]
const resolvers = [userResolvers]

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI()
    }
  }
});

server.listen({port: 4001}).then(
  ({url}) => {
    console.log(`Servidor running on port 4001`);
  }
);