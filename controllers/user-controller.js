const { User } = require('../models');

const userController = {
    getUsers(req, res) {
        User.findAll({})
        .then((data)=> {
            res.json(data)
        })
    },
    singleUser({ params }, res) {
        User.findOne({ _id: params.id })
        populate({ 
            path: 'thoughts', 
            select: '-__v' 
        })
        .select('-__v')
        .then((data)=> {
            res.json(data)
        })
    },
    newUser({ body }, res) {
        User.create(body)
        .then((data)=> {
            res.json(data)
        })
    },
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then((data)=> {
            res.json(data)
        })
    },
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(data => {
            res.json(data)
        })
    },
    addFriend({ params }, res) {
        User.findByIdAndUpdate(
            { _id: params.id },
            { $push: {friends: _id } },
            { new: true, runValidators: true }
        )
        .then(data => {
            res.json(data)
        })
    },
    deleteFriend( { params }, res) {
        User.findByIdAndUpdate(
            { _id: params.id },
            { $pull: { friends: _id } },
            { new: true, runValidators: true }
        )
        .then(data => {
            res.json(data)
        })
    },
};

module.exports = userController;