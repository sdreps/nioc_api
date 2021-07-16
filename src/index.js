const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  console.log("Reveived")
    res.send('Hello World')
})
app.get('/stevenisawesome', function (req, res) {
    console.log("I know")
      res.send('Urgot Rules')
  })
console.log("Listening on port 3000")
app.listen(3000)