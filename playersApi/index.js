const express = require('express')
const app = express()
const playersData = require('./data/players.json')
const port = process.env.PORT || 5050

const getPlayersByTeam = (teamId) => {
  const players = playersData.players.filter(
    player => player.teamId == teamId
  )

  return players
}

app.get('/players', (req, res) =>{
  const { teamId } = req.query
  if(!teamId) return res.json(playersData.players)

  const playersFound = getPlayersByTeam(teamId)
  res.json(playersFound)
})

app.listen(port, () => {
  console.log(`Players api working on ${port}!`)
})