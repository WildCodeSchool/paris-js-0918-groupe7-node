const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.users_answers_possibilities_questions.findAll().then(data => res.json(data));
})

router.get('/:name', (req, res) => {
	models.users_answers_possibilities_questions.findAll({
		where: {
			name : req.params.name
		}
	})
	.then(data => res.json(data));
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newUserAnswerPossibilityQuestion = new models.users_answers_possibilities_questions(data);
	newUserAnswerPossibilityQuestion.save();

	res.sendStatus(200);
})

router.put('/:id(\\d+)', (req, res) => {
	const data = req.body;
	console.log(data);
	models.users_answers_possibilities_questions.update(
		data,
		{ where : { id : req.params.id } }
	);

	res.sendStatus(200);
})

router.delete('/:id(\\d+)', (req, res) => {
	models.users_answers_possibilities_questions.destroy({
		where : {
			id : req.params.id
		}
	});

	res.sendStatus(200);
})

module.exports = router;
