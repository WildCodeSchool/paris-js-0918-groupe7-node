const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.agencies.findAll()
	.then(data => {
		res.status(200).json(data)
	});
});

router.get('/:id(\\d+)', (req, res) => {
	models.agencies.findAll({
		where: {
			id : req.params.id
		},
		include : [{
			model : models.users,
			include : [{
				model : models.users_answers_possibilities_questions
			}]
		}]
	})
	.then(data => {
		res.status(200).json(data);
	});
});

router.post('/', (req, res) => {
	const data = req.body;
	const newAgency = new models.agencies(data);
	newAgency.save()
		.then(newCompany => {
			res.status(200).send(`Agency added at id : ${newAgency.id}`);
		})
		.catch(err => {
			res.status(500).send('Cannot add Agency')
		});
});

router.put('/:id(\\d+)', (req, res) => {
	models.agencies.findById(req.params.id)
	.then(agenciesFound => {
		if(agenciesFound){
			const data = req.body;
			console.log(data);
			models.agencies.update(
				data,
				{ where : { id : req.params.id } }
			)
			.then(updatedAgency => {
				res.status(200).send(`Agency updated at id : ${req.params.id }`);
			});
		}
		else{
			return res.status(404).send(`Agency ${req.params.id} does not exist in DB`);
		}
	});
});

router.delete('/:id(\\d+)', (req, res) => {
	models.agencies.findById(req.params.id)
	.then(agenciesFound => {
		if(agenciesFound){
			models.agencies.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(updatedAgency => {
				res.status(200).send(`Agency deleted at id : ${req.params.id }`);
			})
		}
		else{
			return res.status(404).send(`Agency ${req.params.id} does not exist in DB`);
		}
	});
});

module.exports = router;
