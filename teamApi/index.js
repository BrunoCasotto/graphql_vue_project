const express = require('express')
const app = express()
const teamData = require('./data/teams.json')
const port = process.env.PORT || 4040

app.get('/teams', (req, res) =>{
  res.json(teamData)
})

app.listen(port, () => {
  console.log(`Teams api working on ${port}!`)
})