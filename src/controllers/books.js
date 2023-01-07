const Book = require('../models/book')
const User = require('../models/user')

const watchAllBooks = (req, res) => {
	Book.find({})
		.then(book => res.status(200).send(book))
		.catch(e => res.status(500).send(e.message))
}

const watchBook = (req, res) => {
	const { book_id } = req.params
	Book.findById(book_id)
		.then(book => res.status(200).send(book))
		.catch(e => res.status(500).send(e.message))
}

const takeBook = (req, res) => {
	const { user_id, book_id } = req.params
	const { data } = req.body
	User.findByIdAndUpdate(user_id, {$addToSet: {books: book_id}})
		.then(user => res.status(200).send(user))
		.catch(e => res.status(500).send(e.message))
}


const giveBookBack = (req, res) => {
	const {user_id, book_id} = req.params
	User.findByIdAndUpdate(user_id, {$unset: {books: book_id}} )
		.then(user => res.status(200).send(user))
		.catch(e => res.status(500).send(e.message))
}

module.exports = {
	watchAllBooks,
	watchBook,
	takeBook,
	giveBookBack
}
