// Auth Controllers
exports.register = async (req, res) => res.status(501).json({ message: 'Not Implemented' });
exports.login = async (req, res) => res.status(501).json({ message: 'Not Implemented' });
exports.getProfile = async (req, res) => res.status(501).json({ message: 'Not Implemented' });
exports.updateProfile = async (req, res) => res.status(501).json({ message: 'Not Implemented' });

// User Interaction Controllers

const Follow= require('../models/Follow');
const User = require('../models/User');
exports.followUser = async (req, res) => {
    try {
        // 1.get the follower and followed user IDs
        const followerId = req.user._id; // Assuming user is authenticated and user ID is available in req.user
        const followedId = req.params.id;
        //2. Check if the followed user exists
        const followedUser = await User.findById(followedId);
        if (!followedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        // 3. Check if the user is trying to follow themselves 
        // the toString() is used to compare the ObjectId values as strings,
        // because they are not directly comparable as objects.
        if (followerId.toString() == followedId.toString()) {
            return res.status(400).json({ message: 'You cannot follow yourself' });
        }

        // 4. Check if the follow relationship already exists this can make a load on the database
        // but we can handle it with a unique index in the Follow model and catch the error if it occurs
        // try {  
        // const follow = await Follow.create({ follower: followerId, followed: followedId });  
        // } catch (err) {  
        // i made some good search to find this 
        // if (err.code === 11000) return res.status(409).json({ message: 'Already following' });  
        // }
        
        const existingFollow = await Follow.findOne({ follower: followerId, followed: followedId });
        if (existingFollow) {
            return res.status(400).json({ message: 'You are already following this user' });
        }
        // 5. Create the follow relationship
        const follow = new Follow({ follower: followerId, followed: followedId });
        await follow.save();
        //6. update the followers and following counts for both users
        await User.findByIdAndUpdate(followerId, { $inc: { followingCount: 1 } });
        await User.findByIdAndUpdate(followedId, { $inc: { followersCount: 1 } });
        //7. Return a success response
        res.status(200).json({ message: 'Follow relationship created successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
exports.unfollowUser = async (req, res) => res.status(501).json({ message: 'Not Implemented' });
exports.getFollowers = async (req, res) => res.status(501).json({ message: 'Not Implemented' });
exports.getFollowing = async (req, res) => res.status(501).json({ message: 'Not Implemented' });
