const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.answers_type.findAll()
	.then(data => {
		res.status(200).json(data)
	});
});

router.get('/:id(\\d+)', (req, res) => {
	models.answers_type.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => {
		res.status(200).json(data);
	});
});

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
});

router.put('/:id(\\d+)', (req, res) => {
	models.answers_type.findById(req.params.id)
	.then(answers_typeFound => {
		if(answers_typeFound){
			const data = req.body;
			console.log(data);
			models.answers_type.update(
				data,
				{ where : { id : req.params.id } }
			)
			.then(updatedAnswerType => {
				res.status(200).send(`AnswerType updated at id : ${req.params.id }`);
			});
		}
		else{
			return res.status(404).send('AnswerType does not exist in DB');
		}
	});
});

router.delete('/:id(\\d+)', (req, res) => {
	models.answers_type.findById(req.params.id)
	.then(answers_typeFound => {
		if(answers_typeFound){
			models.answers_type.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(updatedAnswerType => {
				res.status(200).send(`AnswerType deleted at id : ${req.params.id }`);
			})
		}
		else{
			return res.status(404).send(`AnswerType ${req.params.id} does not exist in DB`);
		}
	});
});

module.exports = router;
