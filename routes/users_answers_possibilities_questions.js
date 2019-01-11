const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.users_answers_possibilities_questions.findAll()
	.then(data => {
		res.status(200).json(data)
	});
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newUserAnswerPossibilityQuestion = new models.users_answers_possibilities_questions(data);
	newUserAnswerPossibilityQuestion.save()
		.then(newAnswerPossibilityQuestion => {
			res.status(200).send(`AnswerPossibilityQuestion added`);
		})
		.catch(err => {
			res.status(500).send('Cannot add AnswerPossibilityQuestion')
		});
})

module.exports = router;
