var express = require('express')
//var config = require('./config/index')
//var port = process.env.PORT || config.build.port
var port = 9001 
var app = express()

// var apiRoutes = express.Router()





// app.use('/api', apiRoutes)

//app.use(compression())

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})