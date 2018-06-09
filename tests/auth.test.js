require('babel-register');
const request = require('supertest');
const should = require('should');
const app = require('../src/app');
const agent = request.agent(app);

describe('Auth', function () {
    it('login status 200', function (done) {
        agent.post('/login')
            .expect(200, done);
    });
});