const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const User = require('../../models/User');
const Follow = require('../../models/Follow');
require('dotenv').config();

let token1, id1, id2;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const u1 = await request(app).post('/api/auth/register').send({ username: 'u1', email: 'u1@e.com', password: 'p' });
    const u2 = await request(app).post('/api/auth/register').send({ username: 'u2', email: 'u2@e.com', password: 'p' });
    token1 = u1.body.token;
    id1 = u1.body.user._id;
    id2 = u2.body.user._id;
});

afterAll(async () => {
    await User.deleteMany({});
    await Follow.deleteMany({});
    await mongoose.connection.close();
});

describe('Task 5: Follow System', () => {
    it('should follow a user', async () => {
        const res = await request(app)
            .post(`/api/users/${id2}/follow`)
            .set('Authorization', `Bearer ${token1}`);
        expect(res.statusCode).toEqual(200);
    });
});
