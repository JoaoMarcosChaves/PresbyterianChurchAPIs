const memberSchema = require('../member/memberSchema')

const monthBirthday = (req,res) =>{
	memberSchema.aggregate([
	{
		$project:{
			name: 1,
			month: {$month: '$birthDate'}
		}
	},
	{
		$match: {
			month: 5
		}
	},
	], function(err, result){
		if(err){
			 res.status(500).json({errors: [err]})
		}else{
			res.json(result)
		}
	})
}

const weekBirthday = (req,res) =>{
	res.send('weekBirthday')
}

const lastWeekBirthday = (req,res) =>{
	res.send('lastWeekBirthday')
}


function getActualMonth (){
	// Criar a função que retorna o mês atual, e suprir o campo month no pipe line de agregação na função monthBirthday.
}

module.exports = {monthBirthday, weekBirthday, lastWeekBirthday}
