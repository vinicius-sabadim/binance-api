const fetch = require('node-fetch')
const Table = require('cli-table')

let table = new Table({
	head: ['Symbol', 'Name', 'Value'],
	colWidths: [10, 20, 15]
})

const values = process.argv.slice(2)
const crypto = values.length > 0 ? values : ['ETH', 'TRX']

fetch('https://www.binance.com/exchange/public/product')
  .then((response) => response.json())
  .then((response) => {
    const values = response.data
      .filter((value) => value.quoteAsset === 'BTC')
      .filter((value) => crypto.includes(value.baseAsset))

    for (const value of values) {
      table.push([value.baseAsset, value.baseAssetName, value.close])
    }
    console.log(table.toString())
  })