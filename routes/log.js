// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const models = require('../models');

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/

// Routes
module.exports = {
  register: (req, res) => {
    
    // Params
    const email          = req.body.email;
    const password       = req.body.password;   
    const gender         = req.body.gender;
    const age_range      = req.body.age_range;
    const seniority      = req.body.seniority;
    const role           = req.body.role;
    const is_active      = req.body.is_active;
    const business_focus = req.body.business_focus;
    const agencyId       = req.body.agencyId;
    const companyId      = req.body.companyId;
    const poleId         = req.body.poleId;
    

    if(email == null || password == null) {
      return res.status(400).json({'error': 'missing parameters'});
    }

    // TODO: Add the email extension verification to mail verification
    if(!EMAIL_REGEX.test(email)) {
      return res.status(400).json({'error': 'email is not valid'});
    }

    if(!PASSWORD_REGEX.test(password)) { 
      return res.status(400).json({'error': 'password invalid (must length 4-8 & include 1 number at least)'});
    }

    models.users.findOne({
      attributes: ['email'],
      where: { email: email }
    })
    .then((userFound) => {
      if(!userFound) {
        console.log("user don't exist, ok to create")
        bcrypt.hash(password, 5, (err, bcryptedPassword) => {
          models.users.create({
            email:          email,
            password:       bcryptedPassword,
            gender:         gender,
            age_range:      age_range,
            seniority:      seniority,
            role:           role,
            is_active:      is_active,
            business_focus: business_focus,
            agencyId:       agencyId,
            companyId:      companyId,
            poleId:         poleId,
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

    // Params
    const email    = req.body.email;
    const password = req.body.password;

    if(email == null || password == null) {
      return res.status(400).json({'error': 'missing parameters'});
    }

    models.users.findOne({
      where: { email: email }
    })
    .then((userFound) => {
      if(userFound) {
        bcrypt.compare(password, userFound.password, (errBcrypt, resBcrypt) => {
          if(resBcrypt) {
            return res.status(200).json({
              'userId': userFound.id,
              'token': jwtUtils.generateTokenForUser(userFound)
            });
          } else {
            return res.status(403).json({'error': 'invalid password'});
          }
        });
      } else {
        return res.status(404).json({'error': 'user not exist in DB'});
      }
    })
    .catch(err => {
      return res.status(500).json({'error': 'unable to verify user'});
    });
  }
}