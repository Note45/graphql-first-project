const userResolvers = {
  Query: {
    users: (root, args, { dataSources }, info) => dataSources
      .usersAPI.getUsers(),
    user: (root, { id }, { dataSources }, info) => dataSources
      .usersAPI.getUserById(id)
  },
  Mutation: {
    adicionarUser: (root, user, { dataSources }, info) => dataSources
    .usersAPI.adicionarUser(user)
  }
}

module.exports = userResolvers;