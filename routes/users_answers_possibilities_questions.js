const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.users_answers_possibilities_questions.findAll()
	.then(data => {
		res.status(200).json(data)
	});
});

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
});

router.put('/', (req, res) => {
	const data = req.body;
	console.log( data);

	models.users_answers_possibilities_questions.findOne({
		where: { questionId : data.questionId }
	}).then(uapqFound => {
		if(uapqFound) {
			models.users_answers_possibilities_questions.update(
				data,
				{ where : { questionId : data.questionId } }
			).then(updateduapq => {
				res.status(200).send(`UAPQ updated at questionid : ${ data.questionId }`);
			})
		} else {
			return res.status(404).send(`UAPQ with questionID ${data.questionId} does not exist in DB`);
		}	
	})
});

router.delete('/:id(\\d+)', (req, res) => {
	models.users_answers_possibilities_questions.findById(req.params.id)
	.then(uapqFound => {
		if(uapqFound){
			models.users_answers_possibilities_questions.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(updateduapq => {
				res.status(200).send(`UAPQ deleted at id : ${req.params.id }`);
			})
		}
		else{
			return res.status(404).send(`UAPQ ${req.params.id} does not exist in DB`);
		}
	});
});



module.exports = router;
