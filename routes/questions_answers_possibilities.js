const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.questions_answers_possibilities.findAll()
	.then(data => {
		res.status(200).json(data)
	});
})

module.exports = router;
