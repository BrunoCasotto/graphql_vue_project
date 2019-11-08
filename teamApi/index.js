const express = require('express')
const app = express()
const teamData = require('./data/teams.json')
const port = process.env.PORT || 4040

const matchName = (nameWord, name) => {
  const regex = new RegExp(nameWord.toLowerCase(),'g')
  return name.toLowerCase().search(regex) != -1
}

app.get('/teams', (req, res) =>{
  const { search } = req.query
  if(!search) return res.json(teamData)

  const teamsMatched = teamData.teams.filter(
    team => matchName(search, team.teamName)
  )
  res.json(teamsMatched)
})

app.listen(port, () => {
  console.log(`Teams api working on ${port}!`)
})