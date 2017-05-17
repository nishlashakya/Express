var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const Book = require('../models/books')

mongoose.connect('mongodb://localhost/bookshelf')
var db = mongoose.connection

/* GET home page. */
router.get('/', function(req, res, next) {
	Book.getBooks(function(err, books) {
		if(err) throw err
		res.render('books', {books});
	})
});

router.post('/insert', function(req, res) {
	var book = new Book(req.body);
	book.save(function(err, doc) {
		if(err) throw err
		res.redirect('/books');
	});
})

router.get('/delete/:id', function(req, res) {
	Book.findOneAndRemove({ _id: req.params.id }, function(err, doc) {
		if(err) throw err
		res.redirect('/books');
	})
})

module.exports = router;
