const router = require("express").Router();
const {getUsers, createUser, getUserById} = require('../../controller/userController');
router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUserById).put().delete();
router.route('/:userId/friends/:friendId')

module.exports = router;