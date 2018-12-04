const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.questions.findAll().then(data => res.json(data));
})

router.get('/:id(\\d+)', (req, res) => {
	models.questions.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => res.json(data));
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newQuestion = new models.questions(data);
	newQuestion.save();

	res.sendStatus(200);
})

router.put('/:id(\\d+)', (req, res) => {
	const data = req.body;
	console.log(data);
	models.questions.update(
		data,
		{ where : { id : req.params.id } }
	);

	res.sendStatus(200);
})

router.delete('/:id(\\d+)', (req, res) => {
	models.questions.destroy({
		where : {
			id : req.params.id
		}
	});

	res.sendStatus(200);
})

module.exports = router;
