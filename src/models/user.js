const mongoose = require('mongoose')
const Book = require('./book')

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
	},
	lastName: {
		type: String,
		required: true,
		minlength: 2,
	},
	nickName: {
		type: String,
		required: true,
		minlength: 5,
	},
	books: {
		type: [{type: mongoose.Schema.Types.ObjectId, ref: 'book'}],
		default: [],
	},
})

module.exports = mongoose.model('user', userSchema)