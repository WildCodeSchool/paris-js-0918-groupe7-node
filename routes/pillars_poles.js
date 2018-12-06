const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.pillars_poles.findAll().then(data => res.json(data));
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newPillarsPoles = new models.pillars_poles(data);
	newPillarsPoles.save()
		.then(newPillarsPoles => {
			res.status(200).send(`PillarsPoles added`);
		})
		.catch(err => {
			res.status(500).send('Cannot add PillarsPoles')
		});
})

module.exports = router;
