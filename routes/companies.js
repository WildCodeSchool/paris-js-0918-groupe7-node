const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.companies.findAll().then(data => res.json(data))
})

router.get('/:id(\\d+)', (req, res) => {
	models.companies.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => res.json(data));
})

router.get('/:name', (req, res) => {
	models.companies.findAll({
		where: {
			name : req.params.name
		}
	})
	.then(data => res.json(data));
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
	const data = req.body;
	console.log(data);
	models.companies.update(
		data,
		{ where : { id : req.params.id } }
	)
})

router.delete('/:id(\\d+)', (req, res) => {
	models.companies.destroy({
		where : {
			id : req.params.id
		}
	});

	res.sendStatus(200);
})

module.exports = router;
