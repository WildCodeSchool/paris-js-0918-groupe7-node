// Imports
const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '8oi6fne5ong4mqo7ub6iea3igoei4qne2uiq3yvo4emql9mie9bfi6yve2uk5qke4'

// Exported functions
module.exports = {
    generateTokenForUser: userData => {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        })
    }
}