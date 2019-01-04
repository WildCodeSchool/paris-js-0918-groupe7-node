// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const models = require('../models');
const nodemailer = require('nodemailer');

//const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/

// Routes
module.exports = {
  register: (req, res) => {

  const newEmail_ext = [];
  //const EMAIL_REGEX_TEST = /^@(.*)/;

  models.email_extensions.findAll({
      attributes : ['email_extension']
    }).then(data => {
      data.map(e => newEmail_ext.push(e.dataValues.email_extension));
      //console.log('*',newEmail_ext)

      // Params
      const email            = req.body.email;
      const password         = req.body.password;
      const gender           = req.body.gender;
      const age_range        = req.body.age_range;
      const seniority        = req.body.seniority;
      const role             = req.body.role;
      const is_active        = req.body.is_active;
      const business_focus   = req.body.business_focus;
      const agencyId         = req.body.agencyId;
      const companyId        = req.body.companyId;
      const poleId           = req.body.poleId;

      // missing params?
      if(email == null || password == null) {
        return res.status(400).json({'error': 'missing parameters'});
      }
      // Wrong mail extension
      if(!(newEmail_ext.includes(email.slice(email.indexOf('@'), email.length)))){
        return res.status(400).json({'error': 'email is not valid'});
      }

      // Wrong password
      if(!PASSWORD_REGEX.test(password)) { 
        return res.status(400).json({'error': 'password invalid (must length 4-8 & include 1 number at least)'});
      }

      models.users.findOne({
        attributes: ['email'],
        where: { email: email }
      })
      .then((userFound) => {
        if(!userFound) {
          //console.log("user don't exist, ok to create")
          bcrypt.hash(password, 5, (err, bcryptedPassword) => {
            models.users.create({
              email:            email,
              password:         bcryptedPassword,
              reset_pass_token: null,
              gender:           gender,
              age_range:        age_range,
              seniority:        seniority,
              role:             role,
              is_active:        is_active,
              business_focus:   business_focus,
              agencyId:         agencyId,
              companyId:        companyId,
              poleId:           poleId,
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

  })},    
  login: (req, res) => {

    // Params
    const email    = req.body.email;
    const password = req.body.password;
    // const data = req.body;

    if(email == null || password == null) {
      return res.status(400).json({'error': 'missing parameters'});
    }

    models.users.findOne({
      where: { email: email }
    })
    .then((userFound) => {
      if(userFound) {
        bcrypt.compare(password, userFound.password, (errBcrypt, resBcrypt) => {
          const token = jwtUtils.generateTokenForUser(userFound);
          if(resBcrypt) {
            return res.status(200)
            .set("x-access-token", token)
            .header("Access-Control-Expose-Headers", "x-access-token")
            .json({
              'userId': userFound.id,
              'token': token
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
  },
  forgot: (req,res) => {

    // Params
    const email = req.body.email;
    
    models.users.findOne({
      where: { email: email }
    })
    .then((userFound) => {
      if(userFound) {
        const token = jwtUtils.generateTokenForUser(userFound);
        
        models.users.update(
          {reset_pass_token: token },
          {where: {email: email}}
        )
        .then(() => {
          //console.log('mumumu', token)
          const smtpTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'g.rodrigues.oscar@gmail.com',
              pass: 'kerberos666'
            }
          });
          const mailOptions = {
            to: email,
            from: 'exton@gmail.com',
            subject: 'Node.js Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
              'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
              'http://localhost:3002/users/reset/' + token + '\n\n' +
              'If you did not request this, please ignore this email and your password will remain unchanged.\n'
          };
          smtpTransport.sendMail(mailOptions, function(err) {
            req.flash('info', 'An e-mail has been sent to ' + email + ' with further instructions.');
            done(err, 'done');
          });
        })
        .then(()=>{
          //console.log('mumumu', userFound.reset_pass_token)
          return res.status(200).json({'message': 'email send'});
        });
      } else {
        return res.status(404).json({'error': 'No account with that email address exists.'});
      }
    })
    .catch(err => {
      return res.status(500).json({'error': 'unable to verify user'});
    });


  },
  reset: (req,res) => {

    // Params
    const reset_token = req.params.token;
    const new_pass    = req.body.new_pass;
    
    // Wrong password
    if(!PASSWORD_REGEX.test(password)) { 
      return res.status(400).json({'error': 'password invalid (must length 4-8 & include 1 number at least)'});
    }


    models.users.findOne({
      where: { reset_pass_token: reset_token }
    })
    .then((userFound) => {
      if(userFound.reset_pass_token != null) {
        bcrypt.hash(new_pass, 5, (err, bcryptedNewPassword) => {
          models.users.update(
            {password: bcryptedNewPassword},
            {where: {email: userFound.email}}
          ) 
          .then(()=>{
            models.users.update(
              {reset_pass_token: null},
              {where: {email: userFound.email}}
            ) 
          })
          .then(()=>{
            return res.status(200).json({'message': 'password changed!'});
          })
        });
      } else {
        return res.status(403).json({'error': 'Changing password forbidden!'});
      }
    })
    .catch(err => {
      return res.status(500).json({'error': 'unable to verify user'});
    });
  },
  getRole: (req, res) => {

    const headerAuth = req.headers['authorization'];
    const userRole   = jwtUtils.getUserRole(headerAuth) ;

    if(userRole === null)
      return res.status(400).json({'error' : 'wrong token'})
    
    return res.status(200).json({"role": userRole});
    }
}