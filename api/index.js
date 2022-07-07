const { ApolloServer  } = require('apollo-server');
const userSchema = require('./user/schema/user.graphql');

const users = [
  {
    name: 'Test 1',
    ativo: true
  },
  {
    name: 'Test 2',
    ativo: true
  },
]

const typeDefs = [
  userSchema
]
const resolvers = {}

const server = new ApolloServer({
  typeDefs,
  resolvers
});