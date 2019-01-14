// Imports
const bcrypt = require("bcrypt");
const jwtUtils = require("../utils/jwt.utils");
const models = require("../models");
const nodemailer = require("nodemailer");

const PASSWORD_REGEX = /^(?=.*\d).{4,12}$/;

// Routes
module.exports = {
  register: (req, res) => {
    const newEmail_ext = [];

    models.email_extensions
      .findAll({
        attributes: ["email_extension"]
      })
      .then(data => {
        data.map(e => newEmail_ext.push(e.dataValues.email_extension));
        console.log('*',newEmail_ext)

        // Params
        const email = req.body.email;
        const password = req.body.password;
        const test = !newEmail_ext.includes(email.slice(email.indexOf("@"), email.length))


        // missing params?
        if (email == null || password == null) {
          return res.status(400).json({ error: "missing parameters" });
        }
        // Wrong mail extension
        if (!newEmail_ext.includes(email.slice(email.indexOf("@"), email.length))) {
          return res.status(400).json({ error: "email is not valid" });
        }

        // Wrong password
        if (!PASSWORD_REGEX.test(password)) {
          return res.status(400).json({
            error:
              "password invalid (must length 4-12 & include 1 number at least)"
          });
        }

        models.users
          .findOne({
            attributes: ["email"],
            where: { email: email }
          })
          .then(userFound => {
            if (!userFound) {
             
              const token = jwtUtils.GenerateTokenForRegister(req.body);
              
              //Envoi du mail d'activation
              const smtpTransport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "extondb@gmail.com",
                  pass: "Omega123?"
                }
              });
              const mailOptions = {
                to: email,
                from: "extondb@gmail.com",
                subject: "Activating your account",
                text:
                  "You are receiving this because you (or someone else) have registered an account on ExtonAAA.\n\n" +
                  "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
                  "http://localhost:3000/account_activation/" +
                  token +
                  "\n\n" +
                  "If you did not request this, please ignore this email and your password will remain unchanged.\n"
              };
              smtpTransport.sendMail(mailOptions, function(err) {
                req.flash(
                  "info",
                  "An e-mail has been sent to " +
                    email +
                    " with further instructions."
                );
                done(err, "done");
              });
              return res.status(200).json({ message: "email send" });
            } else {
              return res.status(409).json({ error: "user already exist" });
            }
          })
          .catch(err => {
            return res.status(500).json({ error: "unable to verify user"});
          });
      });
  },
  login: (req, res) => {
    // Params
    const email = req.body.email;
    const password = req.body.password;
    // const data = req.body;

    if (email == null || password == null) {
      return res.status(400).json({ error: "missing parameters" });
    }

    models.users
      .findOne({
        where: { email: email }
      })
      .then(userFound => {
        if (userFound) {
          bcrypt.compare(
            password,
            userFound.password,
            (errBcrypt, resBcrypt) => {
              const token = jwtUtils.generateTokenForUser(userFound);
              if (resBcrypt) {
                return res
                  .status(200)
                  .set("x-access-token", token)
                  .header("Access-Control-Expose-Headers", "x-access-token")
                  .json({
                    userId: userFound.id,
                    token: token
                  });
              } else {
                return res.status(403).json({ error: "invalid password" });
              }
            }
          );
        } else {
          return res.status(404).json({ error: "user not exist in DB" });
        }
      })
      .catch(err => {
        return res.status(500).json({ error: "unable to verify user" });
      });
  },
  forgot: (req, res) => {
    // Params
    const email = req.body.email;

    models.users
      .findOne({
        where: { email: email }
      })
      .then(userFound => {
        if (userFound) {
          const token = jwtUtils.generateTokenForUser(userFound);

          models.users
            .update({ reset_pass_token: token }, { where: { email: email } })
            .then(() => {
              //console.log('mumumu', token)
              const smtpTransport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "extondb@gmail.com",
                  pass: "Omega123?"
                }
              });
              const mailOptions = {
                to: email,
                from: "exton@gmail.com",
                subject: "Node.js Password Reset",
                text:
                  "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
                  "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
                  "http://localhost:3000/reset_password/" +
                  token +
                  "\n\n" +
                  "If you did not request this, please ignore this email and your password will remain unchanged.\n"
              };
              smtpTransport.sendMail(mailOptions, function(err) {
                req.flash(
                  "info",
                  "An e-mail has been sent to " +
                    email +
                    " with further instructions."
                );
                done(err, "done");
              });
            })
            .then(() => {
              //console.log('mumumu', userFound.reset_pass_token)
              return res.status(200).json({ message: "email send" });
            });
        } else {
          return res
            .status(404)
            .json({ error: "No account with that email address exists." });
        }
      })
      .catch(err => {
        return res.status(500).json({ error: "unable to verify user" });
      });
  },
  reset: (req, res) => {
    // Params
    const reset_token = req.params.token;
    const new_pass = req.body.new_pass;
    console.log("terminator ===========> ", reset_token);
    console.log("terminator2 ===========> ", new_pass);
    // Wrong password
    if (!PASSWORD_REGEX.test(new_pass)) {
      return res.status(400).json({
        error: "password invalid (must length 4-8 & include 1 number at least)"
      });
    }

    models.users
      .findOne({
        where: { reset_pass_token: reset_token }
      })
      .then(userFound => {
        if (userFound.reset_pass_token != null) {
          bcrypt.hash(new_pass, 5, (err, bcryptedNewPassword) => {
            models.users
              .update(
                { password: bcryptedNewPassword },
                { where: { email: userFound.email } }
              )
              .then(() => {
                models.users.update(
                  { reset_pass_token: null },
                  { where: { email: userFound.email } }
                );
              })
              .then(() => {
                return res.status(200).json({ message: "password changed!" });
              });
          });
        } else {
          return res
            .status(403)
            .json({ error: "Changing password forbidden!" });
        }
      })
      .catch(err => {
        return res.status(500).json({ error: "unable to verify user" });
      });
  },
  getRole: (req, res) => {
    const headerAuth = req.headers["authorization"];
    const userRole = jwtUtils.getUserRole(headerAuth);
    
    if(userRole === null)
      return res.status(400).json({'error' : 'wrong token'})
    
    return res.status(200).json({"role": userRole});
  },
  requireRole: role => {
    return (req, res, next) => {
      const headerAuth = req.headers['authorization'];
      const userRole   = jwtUtils.getUserRole(headerAuth) ;

      if(userRole === role) {
        next();
      } else {
        res.send(403);
      }
    }
  },
  activate: (req, res) => {

    // Appel du décryptage du token
    const data = jwtUtils.getRegisterData(req.params.token);

    // Params
    const email = data.email;
    const password = data.password;
    const gender = data.gender;
    const age_range = data.age_range;
    const seniority = data.seniority;
    const role = data.role;
    const is_active = data.is_active;
    const business_focus = data.business_focus;
    const agencyId = data.agencyId;
    const companyId = data.companyId;
    const poleId = data.poleId;


    models.users
    .create({
      email: email,
      password: password,
      reset_pass_token: null,
      gender: gender,
      age_range: age_range,
      seniority: seniority,
      role: role,
      is_active: is_active,
      business_focus: business_focus,
      agencyId: agencyId,
      companyId: companyId,
      poleId: poleId
    })
    .then(newUser => {
      return res.status(201).json({ userId: newUser.id });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: "cannot add user" });
    });

  }
}

