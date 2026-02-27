const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/User');

require('dotenv').config();

// Connect to a test database
beforeAll(async () => {
    // Modify MONGO_URI to use a test database if possible
    const testURI = process.env.MONGO_URI + '_test'; 
    await mongoose.connect(testURI);
});

// Clear database after each test
afterEach(async () => {
    await User.deleteMany({});
});

// Close connection after all tests
afterAll(async () => {
    await mongoose.connection.close();
});

describe('Auth API', () => {
    describe('POST /api/auth/register', () => {
        it('should register a new user', async () => {
            const res = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'testuser',
                    email: 'test@example.com',
                    password: 'password123'
                });
            
            // Expected 201 Created
            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('token');
            expect(res.body.user).toHaveProperty('username', 'testuser');
        });

        it('should return 400 for existing email', async () => {
            // Create user first
            await User.create({
                username: 'existing',
                email: 'test@example.com',
                password: 'hashedpassword'
            });

            const res = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'newuser',
                    email: 'test@example.com',
                    password: 'password123'
                });

            expect(res.statusCode).toEqual(400);
        });
    });

    describe('POST /api/auth/login', () => {
        it.todo('should login user and return token');
    });
});
