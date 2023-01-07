const dotenv = require('dotenv')
dotenv.config()

const {API_URL} = process.env

const APIlogger = (req, res, next) => {
	console.log(API_URL)
	next()
}

module.exports = APIlogger