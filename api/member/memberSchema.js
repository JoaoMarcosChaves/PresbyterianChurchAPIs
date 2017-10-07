const restful = require('node-restful')
const mongoose = restful.mongoose

const mailMemberSchema = new mongoose.Schema({
	mailAdress: {type: String, minlength: 5}
})

const phoneMemberSchema = new mongoose.Schema({
	phoneType: {type: String, require: true, uppercase: true,enum: ['LANDLINE','CELLPHONE']},
	phoneNumber: {type: String, minlength: 8 ,maxlength: 9, require: true}
})

const memberSchema = new mongoose.Schema({
	refFamilyObj: {type: String, minlength: 1, require: true},
	name: {type: String, minlength: 5, require: true},
	cep: {type: String, minlength: 8, maxlength: 8, require: true},
	birthDate: {type: Date, require: true},
	frequent: {type: String, require: true, uppercase: true, enum: ['Y','N']},
	active: {type: String, require: true, uppercase: true, enum: ['Y','N']},
	phones: [phoneMemberSchema],
	emails: [mailMemberSchema]
})

module.exports = restful.model('memberSchema', memberSchema)