const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minlength: 2
	},
	author: {
		type: String,
		required: true,
		minlength: 2
	},
	presentationDate: {
		presentationYear:{
			type: Number,
			required: true,
			minlength: 4
		},
		presentationDay: {
			type: Number,
			required: true,
			minlength: 1
		},
		presentationMonth: {
			type: Number,
			required: true,
			minlength: 1
		},
	},
})

module.exports = mongoose.model('book', bookSchema)