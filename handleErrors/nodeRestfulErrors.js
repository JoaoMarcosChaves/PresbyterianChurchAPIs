const _ = require('lodash');

const sendErrorsOrNext = (req, res, next) =>{
	const bundle = res.locals.bundle

	if(bundle.errors){
		var errors = parseErrors(bundle.errors)
		res.status(500).json({errors})
	}else{
		next()
	}
}

const parseErrors = (nodeRestfulErrors) => {
	const errors = []
	
	_.forIn(nodeRestfulErrors, error => errors.push(error.message))
	return errors
}

module.exports = {sendErrorsOrNext}