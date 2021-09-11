const {Thought} = require('../models');
const thoughtController = {
    getThoughts(req,res) {
        Thought.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(500).json(err));
    },
}

module.exports = thoughtController;