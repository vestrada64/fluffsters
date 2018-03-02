const Puppy = require('./../models/Puppy');

function create(req, res) {
    let newPuppy = new Puppy; 

    newPuppy.name = req.body.name;
    newPuppy.description = req.body.description;

    newPuppy.save((err) => { 
        if (err) console.log(err); 
        Puppy.find({})
        .then(puppies => res.json(puppies).status(200));
    })
}

function index(req, res) {
    Puppy.find({})
    .then((puppy) => res.json(puppy).status(200))
    .catch(err => console.log(err));
};

module.exports = {
    create,
    index
}