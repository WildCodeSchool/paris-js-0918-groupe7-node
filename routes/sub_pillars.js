const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.sub_pillars.findAll().then(data => res.json(data));
})

router.get('/:id(\\d+)', (req, res) => {
	models.sub_pillars.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => res.json(data));
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newSubPillar = new models.sub_pillars(data);
	newSubPillar.save();

	res.sendStatus(200);
})

router.put('/:id(\\d+)', (req, res) => {
	const data = req.body;
	console.log(data);
	models.sub_pillars.update(
		data,
		{ where : { id : req.params.id } }
	);

	res.sendStatus(200);
})

router.delete('/:id(\\d+)', (req, res) => {
	models.sub_pillars.destroy({
		where : {
			id : req.params.id
		}
	});

	res.sendStatus(200);
})

module.exports = router;
