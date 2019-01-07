const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.sub_pillars.findAll()
	.then(data => {
		res.status(200).json(data)
	});
})

router.get('/:id(\\d+)', (req, res) => {
	models.sub_pillars.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => {
		res.status(200).json(data)
	});
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log(data);
	const newSubPillar = new models.sub_pillars(data);
	newSubPillar.save()
		.then(newSubPillar => {
			res.status(200).send(`SubPillar added at id : ${newSubPillar.id}`);
		})
		.catch(err => {
			res.status(500).send('Cannot add SubPillar')
		});
})

router.put('/:id(\\d+)', (req, res) => {
	models.sub_pillars.findById(req.params.id)
	.then(sub_pillarsFound => {
		if(sub_pillarsFound){
			const data = req.body;
			console.log(data);
			models.sub_pillars.update(
				data,
				{ where : { id : req.params.id } }
			)
			.then(updatedSubPillars => {
				res.status(200).send(`SubPillar updated at id : ${req.params.id }`);
			});
		}
		else{
			return res.status(404).send(`SubPillar ${req.params.id} does not exist in DB`);
		}
	});
});

router.delete('/:id(\\d+)', (req, res) => {
	models.sub_pillars.findById(req.params.id)
	.then(sub_pillarsFound => {
		if(sub_pillarsFound){
			models.sub_pillars.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(updatedSubPillars => {
				res.status(200).send(`SubPillar deleted at id : ${req.params.id }`);
			})
		}
		else{
			return res.status(404).send(`SubPillar ${req.params.id} does not exist in DB`);
		}
	});
});

module.exports = router;
