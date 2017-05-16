var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

Book = require('../models/books')

mongoose.connect('mongodb://localhost/bookshelf')
var db = mongoose.connection

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('books');
  Book.getBooks(function(err, books) {
	 if(err) {
		 throw err
	 }

	 console.log('books..........', books);
	//  res.json(books)
	// var book = <%- JSON.stringify(books) %>
	res.render('books', {books});

  })
});

// router.get('/', function(req, res, next) {
// 	res.render('insert');
// })
// router.post('/insert', function(req, res, next) {
// 	console.log(',,,,,,,,,,,,,,,,,,,,here');
// 	var data = {
// 		title: req.body.title,
// 		author: req.body.author,
// 		genre: req.body.genre,
// 		description: req.body.description,
// 	}
// 	db.collection('books').insertOne(data, function(err, result) {
// 		console.log('data added', result);
// 		db.close();
// 	})
// })

module.exports = router;
