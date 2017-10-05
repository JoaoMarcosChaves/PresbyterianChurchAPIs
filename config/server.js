const express = require('express')
const bodyParser = require('body-parser')
const allowCors = require('./cors')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(3000, function(){
	console.log('Server online')
})

module.exports = server