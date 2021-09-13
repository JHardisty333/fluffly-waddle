const {Thought} = require('../models');
const thoughtController = {
    getThoughts(req,res) {
        Thought.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(500).json(err));
    },

    getThoughtsById(req,res) {
        Thought.find(req.params.id)
        .populate('reactions')
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    },

    createThought(req,res) {
        Thought.create(req.body)
        .then(createdThought => res.json(createdThought))
        .catch(err => res.status(500).json(err));
    },

    updateThoughtById(req,res) {
        Thought.findByIdAndUpdate(req.params.id, {$set:req.body})
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    },

    deleteThought(req,res) {
        Thought.findByIdAndDelete(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    },

    addReaction(req,res) {
        Thought.findByIdAndUpdate(req.params.id {$push: {reactions: params.friendId}})
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    },

    deleteReaction(req,res) {
        Thought.findByIdAndDelete(req.params.id {$pull: {reactions: {reactionId: params.friendId}}})
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    }
}

module.exports = thoughtController;