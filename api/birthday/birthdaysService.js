const memberSchema = require('../member/memberSchema')
const commonMethods = require('../commonMethods')

const monthBirthday = (req,res) =>{
	const infoDate = commonMethods.getActualInfoDate()
	memberSchema.aggregate([
	{
		$project:{
			name: 1,
			birthDay: {$substr: ['$birthDate',5,5]},
			month: {$month: '$birthDate'}
		}
	},
	{
		$match: {
			month: infoDate.actualmonth
		}
	}
	
	], function(err, result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	})
}

const selectedMonthBirthday = (req, res) =>{
	const monthParam = parseInt(req.params.month)
	memberSchema.aggregate([
	{
		$project:{
			name: 1,
			birthDay: {$substr: ['$birthDate',5,5]},
			month: {$month: '$birthDate'}
		}
	},
	{
		$match: {
			month: monthParam
		}
	}
	
	], function(err, result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
			
		}
	})
}

const weekBirthday = (req,res) =>{
	const infoDate = commonMethods.getActualInfoDate()
	memberSchema.aggregate([
	{
		$project:{
			name: 1,
			birthDay: {$substr: ['$birthDate',5,5]},
			month: {$month: '$birthDate'},
			day: {$dayOfMonth: '$birthDate'},
		}
	},
	{
		$match: {
			month: infoDate.actualmonth,
			day: {$gte: infoDate.actualday, $lte: (infoDate.actualday)+7}
		}
	}
	
	], function(err, result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
		}
	})
}

const lastWeekBirthday = (req,res) =>{
	const infoDate = commonMethods.getActualInfoDate()
	memberSchema.aggregate([
	{
		$project:{
			name: 1,
			birthDay: {$substr: ['$birthDate',5,5]},
			month: {$month: '$birthDate'},
			day: {$dayOfMonth: '$birthDate'},
		}
	},
	{
		$match: {
			month: infoDate.actualmonth,
			day: {$lte: infoDate.actualday, $gte: (infoDate.actualday)-7}
		}
	}
	
	], function(err, result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			commonMethods.checkNullReturnStatement(result, res)
		}
	})
}





module.exports = {monthBirthday, weekBirthday, lastWeekBirthday,selectedMonthBirthday}
