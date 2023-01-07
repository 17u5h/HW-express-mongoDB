const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRouter = require('./routes/users')
const bookRouter = require('./routes/books')
const APIlogger = require('./middlewares/APIlogger')


dotenv.config()

const app = express()

const {PORT, API_URL, DB_URL} = process.env

mongoose.connect(DB_URL, err => {
	if(err) throw err
	console.log('Connected to MongoDB')
})

app.use(bodyParser.json())
app.use(userRouter)
app.use(bookRouter)
app.use(cors)
app.use(APIlogger)

app.get('/', (req, res) => {
	res.status(200)
	res.send('go to /library')
})

app.get('*', (req, res) => {
	res.status(404)
	res.send('Page not found')
})

app.listen(PORT, () => {console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)})

