const { Thought, User } = require('../models');

const userController = {
    getUsers(req, res) {
        User.findAll()
        .then((data)=> {
            res.json(data)
        })
    },
    singleUser(req, res) {
        User.findAll()
        .then((data)=> {
            res.json(data)
        })
    },
    newUser(req, res) {
        User.findAll()
        .then((data)=> {
            res.json(data)
        })
    }
}

module.exports = userController