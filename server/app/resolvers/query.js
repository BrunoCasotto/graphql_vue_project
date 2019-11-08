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

const insertPlayersIntoList = async (teamList) => {
  const teamsAndPlayersList = teamList.map(async team => {
    const playersResult = await getPlayersByTeamId(team.teamId)
    return {
      ...team,
      players: playersResult.data
    }
  })

  return teamsAndPlayersList
}

const teams = async (_, args) => {
  const { name } = args
  let teamList = []

  if(!name) {
    const allTeams = await getAllTeams()
    teamList = allTeams.data
  } else {
    const matchedTeams = await searchTeam(name)
    teamList = matchedTeams.data
  }

  const teamsAndPlayersList = await insertPlayersIntoList(teamList)

  return teamsAndPlayersList
}

module.exports = {
  teams
}
