const memberSchema = require('../member/memberSchema')

const monthBirthday = (req,res) =>{
	res.send('monthBirthday')
}

const weekBirthday = (req,res) =>{
	res.send('weekBirthday')
}

const lastWeekBirthday = (req,res) =>{
	res.send('lastWeekBirthday')
}

module.exports = {monthBirthday, weekBirthday, lastWeekBirthday}