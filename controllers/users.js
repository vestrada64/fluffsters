var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET= process.env.SECRET;

/*---- Helper Functions ------*/

function createJWT(user) {
    return jwt.sign(
        {user}, 
        SECRET,
        {expiresIn: '24h'}
    );
}