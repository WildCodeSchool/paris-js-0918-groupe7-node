const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.pillars.findAll().then(data => {
		res.status(200).json(data)
	});
});

router.get('/:id(\\d+)', (req, res) => {
	models.pillars.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => {
		res.status(200).json(data)
	});
});

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newPillar = new models.pillars(data);
	newPillar.save()
		.then(newPillar => {
			res.status(200).send(`Pillar added at id : ${newPillar.id}`);
		})
		.catch(err => {
			res.status(500).send('Cannot add Pillar')
		});
});

router.put('/:id(\\d+)', (req, res) => {
	models.pillars.findById(req.params.id)
	.then(pillarsFound => {
		if(pillarsFound){
			const data = req.body;
			console.log(data);
			models.pillars.update(
				data,
				{ where : { id : req.params.id } }
			)
			.then(updatedPillars => {
				res.status(200).send(`Pillar updated at id : ${req.params.id }`);
			});
		}
		else{
			return res.status(404).send(`Pillar ${req.params.id} does not exist in DB`);
		}
	});
});

router.delete('/:id(\\d+)', (req, res) => {
	models.pillars.findById(req.params.id)
	.then(pillarsFound => {
		if(pillarsFound){
			models.pillars.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(updatedPillars => {
				res.status(200).send(`Pillar deleted at id : ${req.params.id }`);
			})
		}
		else{
			return res.status(404).send(`Pillar ${req.params.id} does not exist in DB`);
		}
	});
});

module.exports = router;
