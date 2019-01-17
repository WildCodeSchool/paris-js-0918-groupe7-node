const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/", (req, res) => {
  models.agencies.findAll().then(data => {
    res.status(200).json(data);
  });
});

router.get('/:id(\\d+)', (req, res) => {
	models.agencies.findAll({
		where: {
			id : req.params.id
		}
	})
	.then(data => {
		res.status(200).json(data)
	});
});

router.get('/uapq/:id(\\d+)', (req, res) => {
	models.agencies.findAll({
		where: {
			id : req.params.id,
    },
		attributes : ['name'],
		include : [{
			model : models.users,
			attributes : ['id', 'gender', 'age_range', 'seniority', 'business_focus'],
			include : [{
				model : models.users_answers_possibilities_questions,
				attributes : ['id'],
				include : [{
					model : models.questions,
					attributes : ['question', 'agile_orientation']
				},{
					model : models.answers_possibilities,
					attributes : ['answer', 'weight']
				}]
			},{
				model : models.poles,
				attributes : ['name']
			}]
		}]
	})
	.then(data => {
		res.status(200).json(data)
	});
})

router.get("/companyId/:id(\\d+)", (req, res) => {
  models.agencies
    .findAll({
      where: {
        companyId: req.params.id
      }
    })
    .then(data => {
      res.status(200).json(data);
    });
});

router.post("/", (req, res) => {
  const data = req.body;
  const newAgency = new models.agencies(data);
  newAgency
    .save()
    .then(newCompany => {
      res.status(200).send(`Agency added at id : ${newAgency.id}`);
    })
    .catch(err => {
      res.status(500).send("Cannot add Agency");
    });
});

router.put("/:id(\\d+)", (req, res) => {
  models.agencies.findById(req.params.id).then(agenciesFound => {
    if (agenciesFound) {
      const data = req.body;
      console.log(data);
      models.agencies
        .update(data, { where: { id: req.params.id } })
        .then(updatedAgency => {
          res.status(200).send(`Agency updated at id : ${req.params.id}`);
        });
    } else {
      return res
        .status(404)
        .send(`Agency ${req.params.id} does not exist in DB`);
    }
  });
});

router.delete("/:id(\\d+)", (req, res) => {
  models.agencies.findById(req.params.id).then(agenciesFound => {
    if (agenciesFound) {
      models.agencies
        .destroy({
          where: {
            id: req.params.id
          }
        })
        .then(updatedAgency => {
          res.status(200).send(`Agency deleted at id : ${req.params.id}`);
        });
    } else {
      return res
        .status(404)
        .send(`Agency ${req.params.id} does not exist in DB`);
    }
  });
});

module.exports = router;
