const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.pillars_poles.findAll().then(data => res.json(data));
})

router.get('/:name', (req, res) => {
	models.pillars_poles.findAll({
		where: {
			name : req.params.name
		}
	})
	.then(data => res.json(data));
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newPillarsPoles = new models.pillars_poles(data);
	newPillarsPoles.save();

	res.sendStatus(200);
})

router.put('/:id(\\d+)', (req, res) => {
	const data = req.body;
	console.log(data);
	models.pillars_poles.update(
		data,
		{ where : { id : req.params.id } }
	);

	res.sendStatus(200);
})

router.delete('/:id(\\d+)', (req, res) => {
	models.pillars_poles.destroy({
		where : {
			id : req.params.id
		}
	});

	res.sendStatus(200);
})

module.exports = router;
