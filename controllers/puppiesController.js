const Puppy = require('./../models/Puppy');

function index(req, res) {
    Puppy.find({})
    .then((puppy) => res.json(puppy).status(200))
    .catch(err => console.log(err));
};

module.exports = {
    index
}