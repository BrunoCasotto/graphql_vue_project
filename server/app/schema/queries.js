const teams = `
  teams (name: String):[Item]
`

const queries = `
  type Query {
    ${teams}
  }
`

module.exports = queries
