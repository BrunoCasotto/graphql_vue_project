const teamsData = require('./../data/teams.json')
const playersData = require('./../data/players.json')

const matchName = (nameWord, name) => {
  const regex = new RegExp(nameWord.toLowerCase(),'g')
  return name.toLowerCase().search(regex) != -1
}

const getPlayersByTeam = (teamId) => {
  const players = playersData.players.filter(
    player => player.teamId === teamId
  )

  return players
}

const teams = (_, args) => {
  const { name } = args
  if(!name) return teamsData.teams

  const teamsMatched = teamsData.teams.filter(
    team => matchName(name, team.teamName)
  )

  const result = teamsMatched.map(team => {
    return {
      ...team,
      players: getPlayersByTeam(team.teamId)
    }
  })

  return result
}

module.exports = {
  teams
}
