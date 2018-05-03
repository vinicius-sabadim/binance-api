## Binance API
Application to get information about crypto currency using the Binance portal.

### How to use

#### Terminal

- Without any params. The defaults are `ETH` and `TRX`.
```bash
node index.js
```

- With params.
```bash
node index.js XVG EOS
```

#### API

- Run the server
```bash
npm start
```

- Do a post to `http://localhost:PORT`. Default port: `3000`
```javascript
{
  "crypto": ["ETH", "TRX"]
}
```