const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const User = require('../../models/User');
const Message = require('../../models/Message');
const Conversation = require('../../models/Conversation');
require('dotenv').config();

let token1, id2;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const u1 = await request(app).post('/api/auth/register').send({ username: 'm1', email: 'm1@e.com', password: 'p' });
    const u2 = await request(app).post('/api/auth/register').send({ username: 'm2', email: 'm2@e.com', password: 'p' });
    token1 = u1.body.token;
    id2 = u2.body.user._id;
});

afterAll(async () => {
    await User.deleteMany({});
    await Message.deleteMany({});
    await Conversation.deleteMany({});
    await mongoose.connection.close();
});

describe('Task 6: Messaging', () => {
    it('should send a message', async () => {
        const res = await request(app)
            .post('/api/messages')
            .set('Authorization', `Bearer ${token1}`)
            .send({ receiverId: id2, text: 'Hello' });
        expect(res.statusCode).toEqual(201);
    });
});
