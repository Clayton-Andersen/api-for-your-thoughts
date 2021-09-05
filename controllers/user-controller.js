const { User } = require('../models');

const userController = {
    getUsers(req, res) {
        User.find({})
        .then(data => res.json(data))
        .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
    },
    singleUser({ params }, res) {
        User.findOne({ _id: params.id })
        populate({ 
            path: 'thoughts', 
            select: '-__v' 
        })
        .select('-__v')
        .then(data => res.json(data))
        .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
    },
    newUser({ body }, res) {
        User.create(body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then((data)=> {
           if (!data) {
               res.status(404).json({ message: 'No user found with this id!'});
               return;
           }
           res.json(data);
        })
        .catch(err => res.json(err));
    },
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(data => {
            res.json(data)
        })
        .catch(err => res.json(err));
    },
    addFriend({ params }, res) {
        User.findByIdAndUpdate(
            { _id: params.id },
            { $push: {friends: _id } },
            { new: true, runValidators: true }
        )
        .then(data => {
            if (!data) {
                res.status(400).json(err)
            }
            res.json(data)
        })
        .catch(err => res.json(err));
    },
    deleteFriend( { params }, res) {
        User.findByIdAndUpdate(
            { _id: params.id },
            { $pull: { friends: _id } },
            { new: true, runValidators: true }
        )
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No friend found with this id!' })
            }
            res.json(data)
        })
        .catch(err => res.json(err));
    },
};

module.exports = userController;