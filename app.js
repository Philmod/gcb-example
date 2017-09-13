const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
  })
}

module.exports = app;
