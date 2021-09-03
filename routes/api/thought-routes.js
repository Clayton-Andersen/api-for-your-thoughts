const router = require('express').Router();
const {
    getAllThoughts,
    singleThought,
    newThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

router
.route('/')

module.exports = router;