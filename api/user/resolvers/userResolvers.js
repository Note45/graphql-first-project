const userResolvers = {
  Query: {
    users: (root, args, { dataSources }, info) => dataSources
      .usersAPI.getUsers(),
    user: (root, { id }, { dataSources }, info) => dataSources
      .usersAPI.getUserById(id)
  },
  Mutation: {
    adicionarUser: async (root, user, { dataSources }, info) => dataSources
    .usersAPI.adicionarUser(user),
    atualizaUser: async (root, novosDatos, { dataSources }, info) => dataSources
    .usersAPI.atualizaUser(novosDatos),
    deletaUser: async (root, { id }, { dataSources }, info) => dataSources
    .usersAPI.deletaUser(id)
  }
}

module.exports = userResolvers;