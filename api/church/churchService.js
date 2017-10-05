const churchSchema =  require('./churchSchema')

churchSchema.methods(['get','post','put','delete'])

module.exports = churchSchema