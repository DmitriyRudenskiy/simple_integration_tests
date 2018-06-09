require('babel-register');
const request = require('supertest');
const should = require('should');
const app = require('../src/app');
const agent = request.agent(app);

describe('Ping', function () {
  it('Response body', function (done) {
    request(app)
      .get('/ping')
      .expect(200, done);
  });
});