const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.email_extensions.findAll()
	.then(data => {
		res.status(200).json(data)
	});
})

router.get('/:id(\\d+)', (req, res) => {
	models.email_extensions.findAll({
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
	const newEmail_extension = new models.email_extensions(data);
	newEmail_extension.save()
		.then(newEmail_extension => {
			res.status(200).send(`Email_extension added at id : ${newEmail_extension.id}`);
		})
		.catch(err => {
			res.status(500).send('Cannot add Email_extension')
		});
})

router.put('/:id(\\d+)', (req, res) => {
	models.email_extensions.findById(req.params.id)
	.then(email_extensionsFound => {
		if(email_extensionsFound){
			const data = req.body;
			console.log(data);
			models.email_extensions.update(
				data,
				{ where : { id : req.params.id } }
			)
			.then(updatedEmailExtension => {
				res.status(200).send(`EmailExtension updated at id : ${req.params.id }`);
			});
		}
		else{
			return res.status(404).send(`EmailExtension ${req.params.id} does not exist in DB`);
		}
	});
});

router.delete('/:id(\\d+)', (req, res) => {
	models.email_extensions.findById(req.params.id)
	.then(email_extensionsFound => {
		if(email_extensionsFound){
			models.email_extensions.destroy({
				where : {
					id : req.params.id
				}
			})
			.then(updatedEmailExtension => {
				res.status(200).send(`EmailExtension deleted at id : ${req.params.id }`);
			})
		}
		else{
			return res.status(404).send(`EmailExtension ${req.params.id} does not exist in DB`);
		}
	});
});

module.exports = router;
