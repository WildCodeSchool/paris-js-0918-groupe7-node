const express = require('express');
const router = express.Router();
const models = require('../models');
const userCtrl = require('./log');

router.get('/', (req, res) => {
	models.users.findAll()
	.then(data => {
		res.status(200).json(data)
	});
});

router.get('/:id(\\d+)', (req, res) => {
	models.users.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => {
		res.status(200).json(data)
	});
});

router.get('/:email', (req, res) => {
	models.users.findOne({
		attributes: ["role"],
		where: {
			email : req.params.email
		}
	})
	.then(data => {
		res.status(200).json(data)
	});
});

router.post('/register/', userCtrl.register);

router.post('/login/', userCtrl.login);

router.post('/forgot/', userCtrl.forgot);

router.get('/getrole/', userCtrl.getRole);

router.put('/reset/:token', userCtrl.reset);

router.put('/:id(\\d+)', (req, res) => {
	models.users.findById(req.params.id)
	.then(usersFound => {
		if(usersFound){
			const data = req.body;
			console.log(data);
			models.users.update(
				data,
				{ where : { id : req.params.id } }
			)
			.then(updateUser => {
				res.status(200).send(`User updated at id : ${req.params.id }`);
			});
		}
		else{
			return res.status(404).send(`User ${req.params.id} does not exist in DB`);
		}
	});
});

router.delete('/:id(\\d+)', (req, res) => {
	models.users.findById(req.params.id)
	.then(usersFound => {
		if(usersFound){
			models.users.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(updateUser => {
				res.status(200).send(`User deleted at id : ${req.params.id }`);
			})
		}
		else{
			return res.status(404).send(`User ${req.params.id} does not exist in DB`);
		}
	});
});

module.exports = router;
