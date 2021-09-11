const router = require("express").Router();
const {getThoughts} = require('../../controller/thoughtController');

router.route('/').get(getThoughts);

module.exports = router;