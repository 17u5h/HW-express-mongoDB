const bookRouter = require('express').Router()
const {watchAllBooks, watchBook, takeBook, giveBookBack} = require("../controllers/books");

bookRouter.get('/library', watchAllBooks)
bookRouter.get('/library/:user_id/:book_id', watchBook)
bookRouter.post('/library/:user_id/:book_id', takeBook)
bookRouter.patch('/library/:user_id/:book_id', giveBookBack)

module.exports = bookRouter