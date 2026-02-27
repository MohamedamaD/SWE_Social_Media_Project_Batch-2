const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
require('dotenv').config();

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Task 7: Metadata', () => {
    it('should act as a placeholder for notification tests', () => {
        expect(true).toBe(true);
    });
});
