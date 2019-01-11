const express = require('express');
const router = express.Router();
const models = require("../models");

// peut être a virer
router.get('/', (req, res) => {
	models.pillars_poles.findAll()
	.then(data => {
		res.status(200).json(data)
	});
});

module.exports = router;
