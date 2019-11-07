const teamsData = require('./../data/teams.json')

const matchName = (nameWord, name) => {
  const regex = new RegExp(nameWord.toLowerCase(),'g')
  return name.toLowerCase().search(regex) != -1
}

const teams = (_, args) => {
  const { name } = args
  if(!name) return teamsData.teams

  const result = teamsData.teams.filter(
    team => matchName(name, team.teamName)
  )
  return result
}

module.exports = {
  teams
}
