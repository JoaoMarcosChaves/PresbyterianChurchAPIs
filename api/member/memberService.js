const memberSchema = require('./memberSchema')
const handleErrors = require('../../handleErrors/nodeRestfulErrors')

memberSchema.methods(['get','post','put','delete'])
memberSchema.updateOptions({new: true, runValidators: true})

memberSchema.after('post', handleErrors.sendErrorsOrNext).after('put',handleErrors.sendErrorsOrNext)



module.exports = memberSchema