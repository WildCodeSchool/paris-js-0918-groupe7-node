const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.questions_answers_possibilities.findAll().then(data => res.json(data));
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newQuestionAnswerPossibility = new models.questions_answers_possibilities(data);
	newQuestionAnswerPossibility.save()
		.then(newQuestionAnswerPossibility => {
			res.status(200).send(`QuestionAnswerPossibility added`);
		})
		.catch(err => {
			res.status(500).send('Cannot add QuestionAnswerPossibility')
		});
})

module.exports = router;
