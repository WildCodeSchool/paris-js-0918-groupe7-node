// Imports
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SIGN_SECRET = process.env.JWT_SIGN_SECRET

// Exported functions
module.exports = {
    generateTokenForUser: userData => {
        return jwt.sign({
            userId: userData.id,
            role: userData.role
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        })
    },

    parseAuthorization: authorization => {
        return (authorization != null) ? authorization.replace('Bearer ', '') : null;
    },

    getUserRole: authorization => {
        let userRole = null;
        let token = module.exports.parseAuthorization(authorization);

        if(token != null) {
            let jwtToken = jwt.verify(token, JWT_SIGN_SECRET)
            
            if(jwtToken != null)
                userRole = jwtToken.role;
        }
        return userRole;
    }
}