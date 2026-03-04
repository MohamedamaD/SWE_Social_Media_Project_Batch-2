const mongoose = require('mongoose');

// The Follow model 
const followSchema = new mongoose.Schema({
    // TODO: Implement fields according to tasks/05-Follow/specs.md
    follower:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
        index: true
    },
    followed : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
        index: true
    }

}, { timestamps: { createdAt: 'followDate'}});

// make sure a user cannot follow the same user more than once (composite unique index)
followSchema.index({ follower: 1, followed: 1 }, { unique: true });

module.exports = mongoose.model('Follow', followSchema);
