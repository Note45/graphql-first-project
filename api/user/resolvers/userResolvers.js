const { GraphQLScalarType } = require('graphql');

const userResolvers = {
  RolesType: {
    ESTUDANTE: 'ESTUDANTE',
    DOCENTE: 'DOCENTE',
    COORDENACAO:  'COORDENACAO:'
  },
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'string of date and hour in format ISO-8601',
    serialize: (value) => value.toISOString(),
    parseValue:  (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value)
  }),
  respostaCustom: {
    __resolveType(obj, context, info) {
      return false
    },
  },
  Query: {
    users: (root, args, { dataSources }, info) => dataSources
      .usersAPI.getUsers(),
    user: (root, { id }, { dataSources }, info) => dataSources
      .usersAPI.getUserById(id)
  },
  Mutation: {
    adicionarUser: async (root, { user }, { dataSources }, info) => dataSources
    .usersAPI.adicionarUser(user),
    atualizaUser: async (root, novosDatos, { dataSources }, info) => dataSources
    .usersAPI.atualizaUser(novosDatos),
    deletaUser: async (root, { id }, { dataSources }, info) => dataSources
    .usersAPI.deletaUser(id)
  }
}

module.exports = userResolvers;