const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const User = require('../../models/User');
const Post = require('../../models/Post');
require('dotenv').config();

let token;
let userId;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    // Create a user and get token
    const res = await request(app).post('/api/auth/register').send({
        username: 'postuser',
        email: 'post@example.com',
        password: 'password123'
    });
    token = res.body.token;
    // Decode token or get ID from response if available, simplistic approach here:
    // Assuming register returns user object
    if(res.body.user) userId = res.body.user._id;
});

afterEach(async () => {
    await Post.deleteMany({});
});

afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
});

describe('Task 2: Post CRUD', () => {
    it('should create a post', async () => {
        const res = await request(app)
            .post('/api/posts')
            .set('Authorization', `Bearer ${token}`)
            .send({
                content: 'Hello World',
                type: 'text'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('content', 'Hello World');
    });

    it('should get all posts', async () => {
         await request(app)
            .post('/api/posts')
            .set('Authorization', `Bearer ${token}`)
            .send({ content: 'Post 1' });

        const res = await request(app).get('/api/posts');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(0);
    });
});
