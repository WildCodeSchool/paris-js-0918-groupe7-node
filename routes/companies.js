const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.companies.findAll()
	.then(data => {
		res.status(200).json(data)
	});
});

router.get('/:id(\\d+)', (req, res) => {
	models.companies.findAll({
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
		res.status(200).json(data)
	});
})

router.get('/:name', (req, res) => {
	models.companies.findAll({
		where: {
			name : req.params.name
		}
	})
	.then(data => {
		res.status(200).json(data)
	});
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newCompany = new models.companies(data);
	newCompany.save()
		.then(newCompany => {
			res.status(200).send(`Company added at id : ${newCompany.id}`);
		})
		.catch(err => {
			res.status(500).send('Cannot add company')
		});

})

router.put('/:id(\\d+)', (req, res) => {
	models.companies.findById(req.params.id)
	.then(companiesFound => {
		if(companiesFound){
			const data = req.body;
			console.log(data);
			models.companies.update(
				data,
				{ where : { id : req.params.id } }
			)
			.then(updatedCompany => {
				res.status(200).send(`Company updated at id : ${req.params.id }`);
			});
		}
		else{
			return res.status(404).send(`Company ${req.params.id} does not exist in DB`);
		}
	});
});

router.delete('/:id(\\d+)', (req, res) => {
	models.companies.findById(req.params.id)
	.then(companiesFound => {
		if(companiesFound){
			models.companies.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(updatedCompany => {
				res.status(200).send(`Company deleted at id : ${req.params.id }`);
			})
		}
		else{
			return res.status(404).send(`Company ${req.params.id} does not exist in DB`);
		}
	});
});

module.exports = router;
