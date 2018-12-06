const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.answers_type.findAll().then(data => res.json(data));
})

router.get('/:id(\\d+)', (req, res) => {
	models.answers_type.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => res.json(data));
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newAnswerType = new models.answers_type(data);
	newAnswerType.save()
		.then(newAnswerType => {
			res.status(200).send(`AnswerType added at id : ${newAnswerType.id}`);
		})
		.catch(err => {
			res.status(500).send('Cannot add AnswerType')
		});
})

router.put('/:id(\\d+)', (req, res) => {
	const data = req.body;
	console.log(data);
	models.answers_type.update(
		data,
		{ where : { id : req.params.id } }
	);

	res.sendStatus(200);
})

router.delete('/:id(\\d+)', (req, res) => {
	models.answers_type.destroy({
		where : {
			id : req.params.id
		}
	});

	res.sendStatus(200);
})

module.exports = router;
