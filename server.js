const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const crypto = req.body.crypto || []

  fetch('https://www.binance.com/exchange/public/product')
    .then((response) => response.json())
    .then((response) => {
      const values = response.data
        .filter((value) => value.quoteAsset === 'BTC')
        .filter((value) => crypto.includes(value.baseAsset))
      
      res.send(values)
    })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${ PORT }`)
})