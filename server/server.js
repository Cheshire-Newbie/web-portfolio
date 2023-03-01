const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/nowaSciezkaNaGet', (req, res) => {
    res.send('nowa sciezka na get')
  })

const server = app.listen(3080, function () {
    var host = "localhost"
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})