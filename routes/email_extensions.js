const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.email_extensions.findAll().then(data => res.json(data));
})

router.get('/:id(\\d+)', (req, res) => {
	models.email_extensions.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => res.json(data));
})

router.get('/:name', (req, res) => {
	models.email_extensions.findAll({
		where: {
			name : req.params.name
		}
	})
	.then(data => res.json(data));
})

router.post('/', (req, res) => {
	const data = req.body;
	const newEmail_extension = new models.email_extensions(data);
	newEmail_extension.save();

	res.sendStatus(200);
})

router.put('/:id(\\d+)', (req, res) => {
	const data = req.body;
	console.log(data);
	models.email_extensions.update(
		data,
		{ where : { id : req.params.id } }
	);

	res.sendStatus(200);
})

router.delete('/:id(\\d+)', (req, res) => {
	models.email_extensions.destroy({
		where : {
			id : req.params.id
		}
	});

	res.sendStatus(200);
})

module.exports = router;
