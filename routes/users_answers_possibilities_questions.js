const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.users_answers_possibilities_questions.findAll()
	.then(data => {
		res.status(200).json(data)
	});
})

router.get('/getinfo', (req, res) => {
	models.users_answers_possibilities_questions.findAll({
		include : [{
			model : models.questions,
			attributes : ['question', 'agile_orientation']
		},{
			model : models.answers_possibilities,
			attributes : ['answer', 'weight']
		},{
			model : models.users,
			attributes : ['id', 'seniority', 'gender', 'age_range', 'seniority', 'business_focus'],
			include : [{
				model : models.poles,
				attributes : ['name']
			}]
		}]
	})
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
