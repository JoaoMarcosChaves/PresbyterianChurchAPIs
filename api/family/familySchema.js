const restful = require('node-restful')
const mongoose = restful.mongoose

const familySchema = new mongoose.Schema({
	refObjIdChurch: {type: String, minlength: 1, require: true},
	refFamilyName: {type: String, minlength: 5, require: true, uppercase: true},
	refLeaderFirstName: {type: String, minlength: 5, require: true},
	refLeaderLastName: {type: String, minlength: 5, require: true},
})

module.exports = restful.model('familySchema',familySchema)