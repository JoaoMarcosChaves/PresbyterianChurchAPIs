const express = require('express')

module.exports = server =>{
	const router = express.Router()
	server.use('/api',router)

	const churchService = require('../api/church/churchService')
	const familyService = require('../api/family/familyService')


	churchService.register(router,'/church')
	familyService.register(router,'/family')
}