const { ApolloServer } = require('apollo-server')

const typeDefs = `
  type Item {
    id: Int
    type: String
    description: String
  }

  type Query {
    prefixes: [Item],
    sufixes: [Item]
  }
`

const resolvers = {
  Query: {
    prefixes() {
      return []
    },
    sufixes() {
      return []
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen()