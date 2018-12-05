const express = require('express');
const router = express.Router();
const models = require('../models');
const userCtrl = require('./log');

router.get('/', (req, res) => {
	models.users.findAll().then(data => res.json(data));
})

router.get('/:id(\\d+)', (req, res) => {
	models.users.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => res.json(data));
})

// router.post('/', (req, res) => {
// 	const data = req.body;
// 	console.log(data);
// 	const newUser = new models.users(data);
// 	newUser.save();

// 	res.sendStatus(200);
// })

router.post('/register/', userCtrl.register);

router.post('/login/', userCtrl.login);

router.put('/:id(\\d+)', (req, res) => {
	const data = req.body;
	console.log(data);
	models.users.update(
		data,
		{ where : { id : req.params.id } }
	);

	res.sendStatus(200);
})

router.delete('/:id(\\d+)', (req, res) => {
	models.users.destroy({
		where : {
			id : req.params.id
		}
	});

	res.sendStatus(200);
})

module.exports = router;
