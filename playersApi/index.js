const express = require('express')
const app = express()
const playersData = require('./data/players.json')
const port = process.env.PORT || 5050

app.get('/players', (req, res) =>{
  res.json(playersData)
})

app.listen(port, () => {
  console.log(`Players api working on ${port}!`)
})