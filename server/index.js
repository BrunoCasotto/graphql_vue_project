const { ApolloServer } = require('apollo-server')
const queries = require('./app/schema/queries')
const types = require('./app/schema/types')
const Query = require('./app/resolvers/query')

const typeDefs = `
  ${types}
  ${queries}
`
const resolvers = {
  Query,
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen()