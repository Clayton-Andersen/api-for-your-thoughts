const { Thought, } = require('../models');

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
    updateThought({ params, body }, res) {
        Thought.findByIdAndUpdate({ _id: params.id }, 
            body, 
            { new: true, runValidators: true })
        .then((data)=> {
            res.json(data)
        })
    },
    deleteThought({ params}, res ) {
        Thought.findOneAndDelete({ _id: params.id })
        .then((data) => {
            res.json(data)
        })
    },
    addReaction({ params }, res) {
        Thought.findByIdAndUpdate({ _id: params.id })
    },
    deleteReaction() {}
    
};

module.exports = thoughtController;