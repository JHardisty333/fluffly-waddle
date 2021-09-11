const {User} = require('../models');
const userController = {
    getUsers(req,res) {
        User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(500).json(err));
    },

    createUser(req,res) {
        User.create(req.body)
        .then(createdUser => res.json(createdUser))
        .catch(err => res.status(500).json(err));
    },

    getUserById(req,res) {
        User.findById(req.params.id)
        .populate('thoughts')
        .populate('friends')
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    },

    deleteUser(req,res) {
        User.findByIdAndDelete(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    },

    updateById(req,res) {
        User.findByIdAndUpdate(req.params.id, {$set:req.body})
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    }
}
module.exports = userController;