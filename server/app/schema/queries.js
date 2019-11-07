const teams = `
  teams (name: String):[Team]
`

const queries = `
  type Query {
    ${teams}
  }
`

module.exports = queries
