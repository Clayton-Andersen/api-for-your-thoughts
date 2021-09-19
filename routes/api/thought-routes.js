const router = require('express').Router();
const {
    getThought,
    singleThought,
    newThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thought-controller');

router
.route('/')
.get(getThought)
.post(newThought)

router
.route('/:id')
.post(newThought)
.get(singleThought)
.put(updateThought)
.delete(deleteThought)

router
.route(':thoughtId/reactions')
.post(addReaction)

router
.route(':thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;