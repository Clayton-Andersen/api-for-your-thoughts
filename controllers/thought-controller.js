const { Thought, User } = require('../models');

const thoughtController = {
    getThought(req, res) {
        Thought.find({})
        .then((data) =>{
            res.json(data)
        .catch(err => res.json(err))
        })
    },
    singleThought({ params }, res) {
        Thought.findById({ _id: params.id })
        .then(data => {
            if (!data) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(data);
          })
          .catch(err => res.json(err));
    },
    newThought(req, res) {
        Thought.create()
        .then(data => {
            if (!data) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(data);
          })
          .catch(err => res.json(err));
    },
    updateThought({ params, body }, res) {
        Thought.findByIdAndUpdate({ _id: params.id }, 
            body, 
            { new: true, runValidators: true })
            .then(data => {
                if (!data) {
                  res.status(404).json({ message: 'No thought found with this id!' });
                  return;
                }
                res.json(data);
              })
              .catch(err => res.json(err));
    },
    deleteThought({ params}, res ) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(data => {
            if (!data) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(data);
          })
          .catch(err => res.json(err));
    },
    addReaction({ params, body }, res) {
        Thought.findByIdAndUpdate(
            { _id: params.thoughtid },
            { $push: { reaction: body } },
            { new: true, runValidators: true }
        )
        .then(data => {
            if (!data) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(data);
          })
          .catch(err => res.json(err));
      },
    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $pull: { reactions: { reactionId: params.reactionId } } },
          { new: true }
        )
          .then(data => {
              if(!data) {
                  res.status(404).json({ message: 'No thought found with this id!' });
                  return;
              }
              res.json(data);
          })
          .catch(err => res.json(err));
      }
};

module.exports = thoughtController;