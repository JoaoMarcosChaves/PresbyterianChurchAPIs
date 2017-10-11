const memberSchema = require('./memberSchema')
const commonMethods = require('../commonMethods')

const frequentMembersList = (req, res) =>{
	memberSchema.find({frequent: 'Y'}, function(err,result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	})
}

const infrequentMembersList = (req, res) =>{
	memberSchema.find({frequent: 'N'}, function(err,result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	})
}

const activeMembersList = (req, res) =>{
	memberSchema.find({active: 'Y'}, function(err,result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	})
}

const inactiveMembersList = (req, res) =>{
	memberSchema.find({active: 'N'}, function(err,result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	})
}


module.exports = {frequentMembersList, infrequentMembersList, activeMembersList, inactiveMembersList}