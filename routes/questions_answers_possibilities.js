const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.questions_answers_possibilities.findAll().then(data => res.json(data));
})

router.get('/:id(\\d+)', (req, res) => {
	models.questions_answers_possibilities.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => res.json(data));
})

router.get('/:name', (req, res) => {
	models.questions_answers_possibilities.findAll({
		where: {
			name : req.params.name
		}
	})
	.then(data => res.json(data));
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newQuestionAnswerPossibility = new models.questions_answers_possibilities(data);
	newQuestionAnswerPossibility.save();

	res.sendStatus(200);
})

router.delete('/:id(\\d+)', (req, res) => {
	models.questions_answers_possibilities.destroy({
		where : {
			id : req.params.id
		}
	});

	res.sendStatus(200);
})

module.exports = router;
