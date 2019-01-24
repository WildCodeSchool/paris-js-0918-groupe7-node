const express = require('express');
const router = express.Router();
const models = require("../models");
const secure = require('../utils/jwt.utils');

// pour sécuriser les routes: ajouter la fonction en middleware
// secure.requireRole("client")


router.get('/', (req, res) => {
	models.poles.findAll().then(data => {
		res.status(200).json(data)
	});
});

router.get('/:id(\\d+)', (req, res) => {
	models.poles.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => {
		res.status(200).json(data)
	});
})

router.post('/', (req, res) => {
	const {pillarIds, ...data} = req.body;
	console.log(data);
	const newPole = new models.poles(data);
	newPole.save()
		.then(newPole => {
			pillarIds.map(id =>
			models.pillars.findById(id).then(pillar => pillar.addPole(newPole)));
			res.status(200).send(`Pole added at id : ${newPole.id}`);
		})
		.catch(err => {
			res.status(500).send('Cannot add Pole')
		});
});

router.put('/:id(\\d+)', (req, res) => {
	models.poles.findById(req.params.id)
	.then(polesFound => {
		if(polesFound){
			const data = req.body;
			console.log(data);
			models.poles.update(
				data,
				{ where : { id : req.params.id } }
			)
			.then(updatedPoles => {
				res.status(200).send(`Pole updated at id : ${req.params.id }`);
			});
		}
		else{
			return res.status(404).send(`Pole ${req.params.id} does not exist in DB`);
		}
	});
});

router.delete('/:id(\\d+)', (req, res) => {
	models.poles.findById(req.params.id)
	.then(polesFound => {
		if(polesFound){
			models.poles.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(updatedPoles => {
				res.status(200).send(`Pole deleted at id : ${req.params.id }`);
			})
		}
		else{
			return res.status(404).send(`Pole ${req.params.id} does not exist in DB`);
		}
	});
});

module.exports = router;
