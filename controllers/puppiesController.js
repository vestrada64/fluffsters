const Puppy = require('./../models/Puppy');

function create(req, res) {
    let createComments = new Comment;

    createComments.name = req.body.name;
    createComments.comments = req.body.comment;

    createComments.save((err) => {
        if (err) console.log(err);
        Comment.find({})
        .then(comments => res.json(comments).status(200));
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