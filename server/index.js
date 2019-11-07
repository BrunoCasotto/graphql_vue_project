const { ApolloServer } = require('apollo-server')

const typeDefs = `
  type Item {
    id: Int
    type: String
    description: String
  }

  type Query {
    items (type: String): [Item]
  }

  input ItemInput {
    type: String
    description: String
  }

  type Mutation {
    saveItem (item: ItemInput): Item
    deleteItem (id: Int): Boolean
  }
`

const prefixes = [
  {id: 1, type: 'prefixe', description: 'Air'},
  {id: 2, type: 'prefixe', description: 'Jet'},
  {id: 3, type: 'prefixe', description: 'Plain'},
  {id: 4, type: 'sufix', description: 'Hub'},
  {id: 5, type: 'sufix', description: 'Mart'},
  {id: 6, type: 'sufix', description: 'Test'}
]

const resolvers = {
  Query: {
    items(_, args) {
      const response = prefixes.filter(item => item.type === args.type)
      return response
    }
  },
  Mutation: {
    saveItem(_, args) {
      const { item } = args
      item.id = math.floor(math.random() * 1000)
      prefixes.push(item)
      return item
    },
    deleteItem(_, args) {
      const { id } = args
      const item = items.find(item => item.id === id)
      if(!item) return false

      items.splice(items.indexOf(item), 1)
      return true
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen()