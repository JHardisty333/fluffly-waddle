const router = require("express").Router();
const {getThoughts} = require('../../controller/thoughtController');

router.route('/').get(getThoughts).post(postThought);
router.route('/:id').get(getThought).put(updateThought).delete(deleteThought);
router.route('/:id/reactions').post(addReaction);
router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;