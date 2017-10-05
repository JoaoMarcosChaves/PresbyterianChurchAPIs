const restful = require('node-restful')
const mongoose = restful.mongoose

const familySchema = new mongoose.Schema({
	refObjIdChurch: {type: String, require: true},
	refFamilyName: {type: String, require: true, upperCase: true},
	refLeaderFirstName: {type: String, require: true},
	refLeaderLastName: {type: String, require: true},
})

module.exports = restful.model('familySchema',familySchema)