const { Thought, User } = require('../models');

const userController = {
    getUsers(req, res) {
        User.findAll({})
        .then((data)=> {
            res.json(data)
        })
    },
    singleUser({ params }, res) {
        User.findOne({ _id: params.id })
        .then((data)=> {
            res.json(data)
        })
    },
    newUser(req, res) {
        User.findAll()
        .then((data)=> {
            res.json(data)
        })
    },
    updateUser() {},
    deleteUser() {},
    addFriend() {},
    deleteFriend() {},
};

module.exports = userController;