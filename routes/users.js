const express = require('express');
const router = express.Router();
const models = require('../models');
const userCtrl = require('./log');
const jwtUtils = require('../utils/jwt.utils')

router.get('/', (req, res) => {
	models.users.findAll()
	.then(data => {
		res.status(200).json(data)
	});
});

router.get('/companyUsers=:companyName', (req, res) => {
	models.users.findAll({
		attributes: ["email", "role"],
		where: { is_active: 1 },
		include: [{
			model: models.companies,
			where: { name: req.params.companyName }
		}] 
	})
	.then(data => {
		res.status(200).json(data)
	});
});

router.get('/surveyById', (req, res) => {
	const headerAuth = req.headers['authorization'];
	const userId = jwtUtils.getUserId(headerAuth) ;

	models.users.findAll({
		where : {
			id : userId
		},
		include : [{
			model : models.poles,
			include : [{
				model : models.pillars,
				include : [{
					model : models.sub_pillars,
					include : [{
						model : models.questions,
						include : [{
							model : models.answers_possibilities,
							include : [{
								model : models.answers_type
							}]
						}]
					}]
				}]
			}]
		}]
	})
	.then(data => {
		res.status(200).json(data)
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

router.post('/activate/:token', userCtrl.activate);

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

router.put("/companyId/:id(\\d+)", (req, res) => {
	models.users.findAll({
	  where: {
		companyId: req.params.id
	  }
	})
	.then(userFound => {
	  if (userFound) {
		const data = req.body;
		console.log(data);
		models.users
		  .update(data, { where: { companyId: req.params.id } })
		  .then(udatedUser => {
			res.status(200).send(`User(s) desactivated for companyId : ${req.params.id}`);
		  });
	  } else {
		return res
		  .status(404)
		  .send(`no user(s) found for the compagnyId ${req.params.id} in DB`);
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
