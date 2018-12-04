const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.agencies.findAll().then(data => res.json(data));
})

router.get('/:id(\\d+)', (req, res) => {
	models.agencies.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => res.json(data));
})

router.get('/:name', (req, res) => {
	models.agencies.findAll({
		where: {
			name : req.params.name
		}
	})
	.then(data => res.json(data));
})

router.post('/', (req, res) => {
	const data = req.body;
	const newAgency = new models.agencies(data);
	newAgency.save();

	res.sendStatus(200);
})

router.put('/:id(\\d+)', (req, res) => {
	const data = req.body;
	console.log(data);
	models.agencies.update(
		data,
		{ where : { id : req.params.id } }
	);

	res.sendStatus(200);
})

router.delete('/:id(\\d+)', (req, res) => {
	models.agencies.destroy({
		where : {
			id : req.params.id
		}
	});

	res.sendStatus(200);
})

module.exports = router;
