const { User } = require('../models');

const userController = {
    getUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
    },
    singleUser({ params }, res) {
        User.findById({ _id: params.id })
        .populate({ 
            path: 'thoughts', 
            select: '-__v -username -userId -id' 
        })
        .select('-__v')
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(400).json({ message: 'No user found with this id!'})
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => { 
        // console.log(err);
        res.sendStatus(400);
      });
    },
    newUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },
    updateUser({ params, body }, res) {
        console.log(body);
        console.log(params);
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then((dbUserData)=> {
           if (!dbUserData) {
               res.status(404).json({ message: 'No user found with this id!'});
               return;
           }
           res.json(dbUserData);
        })
        .catch(err => portres.status(400).json(err));
    },
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            res.json(dbUserData)
        })
        .catch(err => res.json(err));
    },
    addFriend({ params }, res) {
        User.findByIdAndUpdate(
            { _id: params.id },
            { $push: {friends: _id } },
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json(err)
            }
            res.json(dbUserData)
        })
        .catch(err => res.json(err));
    },
    deleteFriend( { params }, res) {
        User.findByIdAndUpdate(
            { _id: params.id },
            { $pull: { friends: _id } },
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No friend found with this id!' })
            }
            res.json(dbUserData)
        })
        .catch(err => res.json(err));
    },
};

module.exports = userController;