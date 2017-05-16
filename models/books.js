var mongoose = require('mongoose')

// create schema

var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	author: String,
	genre: String,
	description: String,
	create_date: {
		type: Date,
		default: Date.now
	}
})

var Book = module.exports = mongoose.model('Book', bookSchema)

// getGenre function
module.exports.getBooks = function(callback, limit) {
	Book.find(callback).limit(limit)
}
