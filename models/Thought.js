const {Schema,model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
    
    thoughtText :{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },

    username:{
        type: String,
        required: true,
    },


    reactions: [
        reactionSchema
    ],

}, 
{
    toJSON: {
    virtuals: true
  },
  id: false
})

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
  
const Thought = model('Thought', thoughtSchema);
  
 module.exports = Thought;