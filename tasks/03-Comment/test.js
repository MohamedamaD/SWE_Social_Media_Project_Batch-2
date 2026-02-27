const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const User = require('../../models/User');
const Post = require('../../models/Post');
const Comment = require('../../models/Comment');
require('dotenv').config();

let token;
let postId;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const userRes = await request(app).post('/api/auth/register').send({
        username: 'commentuser',
        email: 'comment@example.com',
        password: 'password123'
    });
    token = userRes.body.token;

    const postRes = await request(app)
        .post('/api/posts')
        .set('Authorization', `Bearer ${token}`)
        .send({ content: 'Test Post' });
    postId = postRes.body._id;
});

afterAll(async () => {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});
    await mongoose.connection.close();
});

describe('Task 3: Comments', () => {
    it('should add a comment to a post', async () => {
        const res = await request(app)
            .post(`/api/posts/${postId}/comments`)
            .set('Authorization', `Bearer ${token}`)
            .send({ text: 'Nice post!' });
        
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('text', 'Nice post!');
    });
});
