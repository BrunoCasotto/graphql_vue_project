const axios = require('axios')
const teamsApiPath = `http://teamapi:4040/teams`
const playersApiPath = `http://playerapi:5050/players`

const getAllTeams = async () => {
  return axios.get(teamsApiPath)
}

const searchTeam = async (term) => {
  return axios.get(`${teamsApiPath}?search=${term}`)
}

const getPlayersByTeamId = async (teamId) => {
  return axios.get(`${playersApiPath}?teamId=${teamId}`)
}

const teams = async (_, args) => {
  const { name } = args
  if(!name) {
    const allTeams = await getAllTeams()
    return allTeams.data
  }

  const { data } = await searchTeam(name)
  const teamsMatched = data

  const teamsAndPlayersList = teamsMatched.map(async team => {
    const playersResult = await getPlayersByTeamId(team.teamId)
    return {
      ...team,
      players: playersResult.data
    }
  })

  return teamsAndPlayersList
}

module.exports = {
  teams
}
