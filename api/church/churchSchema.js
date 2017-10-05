const restful = require('node-restful')
const mongoose = restful.mongoose

const churchSchema = new mongoose.Schema({
	name: {type: String, require:true},
})

module.exports = restful.model('churchSchema', churchSchema)