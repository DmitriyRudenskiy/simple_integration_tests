require('babel-register');
const request = require('supertest');
const should = require('should');
const app = require('../src/app');
const agent = request.agent(app);

console.log(app);


/*
describe('Ping', function () {
  it('Response body', function (done) {
    request(app)
      .get('/ping')
      .end(function(err, res) {
        if (err) throw err;

        console.log(res);
        done();
      });
  });
});
*/