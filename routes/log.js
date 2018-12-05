// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const models = require('../models');

// Routes
module.exports = {
  register: (req, res) => {
    
    // Params
    const email     = req.body.email;
    const password  = req.body.password;
    const gender    = req.body.gender;
    const age_range = req.body.age_range;
    const seniority = req.body.seniority;
    const role      = req.body.role;
    const agency    = req.body.agency;
    const company   = req.body.company;
    const pole      = req.body.pole;
    

    if(email == null || password == null) {
      return res.status(400).json({'error': 'missing parameters'});
    }

    // TODO: verify pseudo length, mail , password, etc.

    models.users.findOne({
      attributes: ['email'],
      where: { email: email }
    })
    .then((userFound) => {
      if(!userFound) {
        console.log("user don't exist, ok to create")
        bcrypt.hash(password, 5, (err, bcryptedPassword) => {
          const newUser = models.users.create({
            email:     email,
            password:  bcryptedPassword,
            gender:    gender,
            age_range: age_range,
            seniority: seniority,
            role:      role,
            agencyId:  agency,
            companyId: company,
            poleId:    pole,
          })
          .then(newUser => {
            return res.status(201).json({'userId': newUser.id})
          })
          .catch(err => {
            return res.status(500).json({'error': 'cannot add user'});
          });
        });
      } else {
        return res.status(409).json({'error': 'user already exist'});
      }
    })
    .catch(err => {
      return res.status(500).json({'error': 'unable to verify user'});
    });

  },    
  login: (req, res) => {

    // // Params
    // const email    = req.body.email;
    // const password = req.body.password;

    // if(email == null || password == null) {
    //   return res.status(400).json({'error': 'missing parameters'});
    // }

    // // TODO: verify mail regex, password length.

    // models.users.findOne({
    //   where: { email: email }
    // })
    // .then((userFound) => {
    //   if(userFound) {
    //     bcrypt.compare(password, userFound.password, (errBcrypt, resBcrypt) => {
    //       if(resBcrypt) {
    //         return res.status(200).json({
    //           'userId': userFound.id,
    //           'token': jwtUtils.generateTokenForUser(userFound)
    //         });
    //       } else {
    //         return res.status(403).json({'error': 'invalid password'});
    //       }
    //     });
    //   } else {
    //     return res.status(404).json({'error': 'user not exist in DB'});
    //   }
    // })
    // .catch(err => {
    //   return res.status(500).json({'error': 'unable to verify user'});
    // });
  }
}