const getActualInfoDate = () =>{
	const actualDate = new Date()

	const dateObj = {
		actualmonth: (actualDate.getMonth())+1,
		actualday: actualDate.getUTCDate()
	}
	
	return dateObj
}

const checkNullReturnStatement= (result, res) =>{
	result.length > 0 ? res.json(result) : res.json({msg: 'There are no records for this query'})
}

module.exports = {getActualInfoDate, checkNullReturnStatement}