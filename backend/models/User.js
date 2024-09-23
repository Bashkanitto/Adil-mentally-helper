const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: String,
	messages: [{ text: String, date: Date }]
})

module.exports = mongoose.model('User', userSchema)
