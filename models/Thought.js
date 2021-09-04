const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
},
reactionBody: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
},
username: {
    type: String,
    required: true
},
createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
},
},
{
    toJson: {
        getters: true
    }
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    })
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
});

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;