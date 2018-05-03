const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const options = {
    url: 'https://www.binance.com/exchange/public/product',
    json: true
  }
  const rp = require('request-promise')

  const crypto = req.body.crypto || []

  rp(options)
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