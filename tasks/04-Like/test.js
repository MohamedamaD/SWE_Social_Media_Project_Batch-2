const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const User = require('../../models/User');
const Post = require('../../models/Post');
const Like = require('../../models/Like');
require('dotenv').config();

let token;
let postId;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    // Setup user & post
    const uRes = await request(app).post('/api/auth/register').send({
        username: 'likeuser', email: 'like@example.com', password: 'password'
    });
    token = uRes.body.token;
    const pRes = await request(app).post('/api/posts').set('Authorization', `Bearer ${token}`).send({ content: 'Like me' });
    postId = pRes.body._id;
});

afterAll(async () => {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Like.deleteMany({});
    await mongoose.connection.close();
});

describe('Task 4: Likes', () => {
    it('should like a post', async () => {
        const res = await request(app)
            .post(`/api/posts/${postId}/like`)
            .set('Authorization', `Bearer ${token}`)
            .send({ type: 'Love' });
        expect(res.statusCode).toEqual(200); // Or 201
    });
});
