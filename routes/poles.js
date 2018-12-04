const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.poles.findAll().then(data => res.json(data));
})

router.get('/:id(\\d+)', (req, res) => {
	models.poles.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => res.json(data));
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newPole = new models.poles(data);
	newPole.save();

	res.sendStatus(200);
})

router.put('/:id(\\d+)', (req, res) => {
	const data = req.body;
	console.log(data);
	models.poles.update(
		data,
		{ where : { id : req.params.id } }
	);

	res.sendStatus(200);
})

router.delete('/:id(\\d+)', (req, res) => {
	models.poles.destroy({
		where : {
			id : req.params.id
		}
	});

	res.sendStatus(200);
})

module.exports = router;
