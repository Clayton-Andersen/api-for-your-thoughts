const { Thought, User } = require('../models');

const thoughtController = {
    getThought(req, res) {
        Thought.findAll()
        .then((data) =>{
            res.json(data)
        })
    },
    singleThought({ params }, res) {
        Thought.findById({ _id: params.id })
        .then((data) => {
            res.json(data)
        })
    },
    newThought(req, res) {
        Thought.create()
        .then((data) => {
            res.json(data)
        })
    },
    
};

module.exports = thoughtController;