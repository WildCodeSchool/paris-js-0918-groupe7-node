const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.questions.findAll()
	.then(data => {
		res.status(200).json(data)
	});
});

router.get('/:id(\\d+)', (req, res) => {
	models.questions.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => {
		res.status(200).json(data)
	});
});

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newQuestion = new models.questions(data);
	newQuestion.save()
		.then(newQuestion => {
			res.status(200).send(`Question added at id : ${newQuestion.id}`);
		})
		.catch(err => {
			res.status(500).send('Cannot add Question')
		});
});

router.put('/:id(\\d+)', (req, res) => {
	models.questions.findById(req.params.id)
	.then(questionsFound => {
		if(questionsFound){
			const data = req.body;
			console.log(data);
			models.questions.update(
				data,
				{ where : { id : req.params.id } }
			)
			.then(updatedQuestions => {
				res.status(200).send(`Question updated at id : ${req.params.id }`);
			});
		}
		else{
			return res.status(404).send(`Question ${req.params.id} does not exist in DB`);
		}
	});
});

router.delete('/:id(\\d+)', (req, res) => {
	models.questions.findById(req.params.id)
	.then(questionsFound => {
		if(questionsFound){
			models.questions.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(updatedQuestions => {
				res.status(200).send(`Question deleted at id : ${req.params.id }`);
			})
		}
		else{
			return res.status(404).send(`Question ${req.params.id} does not exist in DB`);
		}
	});
});

module.exports = router;
