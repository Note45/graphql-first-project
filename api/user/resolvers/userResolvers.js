const arrayUsers = [
  {
    nome: 'Test 1',
    ativo: true
  },
  {
    nome: 'Test 2',
    ativo: true
  },
]

const userResolvers = {
  Query: {
    users: () => arrayUsers,
    primeiroUser: () => arrayUsers[0]
  }
}

module.exports = userResolvers;