const Player = `
  type Player {
    playerId: Int
    teamId: Int
    firstName: String
    lastName: String
  }
`
const Team = `
  type Team {
    teamId: Int
    abbreviation: String
    teamName: String
    simpleName: String
    location: String
    players: [Player]
  }
`
const types = `
  ${Player}
  ${Team}
`
module.exports = types
