// server.js

// require express and other modules
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),  // for data from the request body
	mongoose = require('mongoose'),       // to interact with our db
	Question = require('./models/question');

// connect to mongodb
mongoose.connect(
	process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/q_and_a'
);

// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));

// send back all questions
app.get('/api/questions', function (req, res) {
	Question.find({}, function (err, questions) {
		res.json(questions);
	});
});

// create new question
app.post('/api/questions', function (req, res) {
	// create new question with data from the body of the request (`req.body`)
	// body should contain the question text itself
	var newQuestion = new Question({
		text: req.body.text
	});

	// save new question
	newQuestion.save(function (err, savedQuestion) {
		res.json(savedQuestion);
	});
});

// update question, but only the part(s) passed in in the request body
// not currently that exciting when question has only one attribute
app.put('/api/questions/:id', function (req, res) {
	// set the value of the id
	var targetId = req.params.id;

	// find question in db by id
	Question.findOne({_id: targetId}, function (err, foundQuestion) {
		// update the question's text, if the new text passed in was truthy
		// otherwise keep the same text
		foundQuestion.text = req.body.text || foundQuestion.text;

		// save updated question in db
		foundQuestion.save(function (err, savedQuestion) {
			res.json(savedQuestion);
		});
	});
});

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
	console.log("It's Aliveeeeeee!");
});