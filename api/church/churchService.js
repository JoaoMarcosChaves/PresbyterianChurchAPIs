const churchSchema =  require('./churchSchema')
const handleErrors = require('../../handleErrors/nodeRestfulErrors')

churchSchema.methods(['get','post','put','delete'])
churchSchema.updateOptions({new: true, runValidators: true});

churchSchema.after('post', handleErrors.sendErrorsOrNext).after('put',handleErrors.sendErrorsOrNext);

module.exports = churchSchema