const familySchema = require('./familySchema')
const handleErrors = require('../../handleErrors/nodeRestfulErrors')

familySchema.methods(['get','post','put','delete'])
familySchema.updateOptions({new: true, runValidators: true})

familySchema.after('post', handleErrors.sendErrorsOrNext).after('put',handleErrors.sendErrorsOrNext)

module.exports = familySchema