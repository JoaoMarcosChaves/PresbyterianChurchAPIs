const memberSchema = require('./memberSchema')
const commonMethods = require('../commonMethods')

const frequentMembersList = (req, res) =>{
	memberSchema.find({frequent: 'Y'}, function(err,result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	}).sort({name:1})
}

const infrequentMembersList = (req, res) =>{
	memberSchema.find({frequent: 'N'}, function(err,result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	}).sort({name:1})
}

const activeMembersList = (req, res) =>{
	memberSchema.find({active: 'Y'}, function(err,result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	}).sort({name:1})
}

const inactiveMembersList = (req, res) =>{
	memberSchema.find({active: 'N'}, function(err,result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	}).sort({name:1})
}

const fullMembersOrderedList = (req, res) =>{
	memberSchema.find({}, function(err,result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	}).sort({name:1})
}

const membersByFamilyList = (req, res) =>{
	memberSchema.aggregate([
		{
			$project:{
				refFamilyObj:1,
				familyName: 1,
				name: 1,
				cep: 1,
				emails: 1,
				phones: 1
			}
		},
		{
			$sort:{familyName: 1,refFamilyObj:1}
		}
		], function(err,result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	})
}

module.exports = {frequentMembersList, infrequentMembersList, activeMembersList, inactiveMembersList,fullMembersOrderedList, membersByFamilyList}