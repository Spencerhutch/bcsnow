const express = require('express')

const app = express()
const port = 5000

const cypress = require('./lib/cypress')

app.get('/', (req, res) => {
  return res.send('Hi!')
})


app.get('/snowfall/cypress', async (req, res) => {
  return res.send(await cypress.snowfall())
})

app.listen(port, () => console.log(`App listening on port ${port}!`))