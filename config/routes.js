const express = require('express')

module.exports = server =>{
	const router = express.Router()
	server.use('/api',router)

	const churchService = require('../api/church/churchService')
	churchService.register(router,'/church')
}