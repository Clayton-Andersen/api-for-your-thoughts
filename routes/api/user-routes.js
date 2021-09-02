const router = require('express').Router();
const  {getUsers, singleUser, newUser } = require('../../controllers/user-controller');
router.route('/').get(getUsers).post(newUser);

router.route('/:id').get(singleUser)

module.exports = router;