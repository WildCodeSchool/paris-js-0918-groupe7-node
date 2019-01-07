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
	let resultTable = [];
	models.users.findAll({
		where : { 
			id : req.params.id 
		}, 
		include : [ 
			models.poles,
			// models.pillars,
			// models.sub_pillars,
			// models.questions,
			// models.answers_possibilities,
			// models.answers_type
		]
	})
	.then(data => {
		resultTable.push(data);
		const pole = data[0].pole.id
		models.poles.findAll({
			where : { 
				id : pole
			}, 
			include : [ 
				//models.poles,
				models.pillars,
				// models.sub_pillars,
				// models.questions,
				// models.answers_possibilities,
				// models.answers_type
			]
		})
		.then(data => {
		resultTable.push(data);
			data[0].pillars.map(data => {
			const pillar = data.id
			models.pillars.findAll({
				where : { 
					id : pillar
				}, 
				include : [ 
					//models.poles,
					// models.pillars,
					 models.sub_pillars,
					// models.questions,
					// models.answers_possibilities,
					// models.answers_type
				]
			})
			.then(data => {
				resultTable.push(data);
				//res.status(200).json(data)
				data[0].sub_pillars.map(data => {
					const sub_pillars = data.id
					models.sub_pillars.findAll({
						where : {
							id : sub_pillars
						},
						include : [ 
							//models.poles,
							// models.pillars,
							// models.sub_pillars,
							models.questions,
							// models.answers_possibilities,
							// models.answers_type
						]
					})
					.then(data => {
						resultTable.push(data);
						//res.status(200).json(data)
						data[0].questions.map(data => {
							const questions = data.id
							models.questions.findAll({
								where : {
									id : questions
								},
								include : [ 
									//models.poles,
									// models.pillars,
									// models.sub_pillars,
									// models.questions,
									models.answers_possibilities,
									// models.answers_type
								]
							})
							.then(data => {
								resultTable.push(data);
								// res.status(200).json(data)
								data[0].answers_possibilities.map(data => {
									const answers_possibilities = data.id
									models.answers_possibilities.findAll({
										where : {
											id : answers_possibilities
										},
										include : [ 
											//models.poles,
											// models.pillars,
											// models.sub_pillars,
											// models.questions,
											// models.answers_possibilities,
											models.answers_type
										]
									})
									.then(data => {
										resultTable.push(data);
										})
										.then(
											res.status(200).json(resultTable)
										)
									})
								})
							})
						})
					})
				})
			})
		})
	})
})

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

router.post('/getrole/', userCtrl.getRole);

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
