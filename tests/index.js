var request = require('supertest');
var should = require('should');
var app = require('../src/app');

describe('GET /', function () {
    it('response code', function (done) {
        request(app)
            .get('/')
            .expect(200, done);
    });

    it('Response body', function (done) {
        request(app)
            .get('/')
            .expect('Hello World', done);
    });

    it('Content type', function (done) {
        request(app)
            .get('/')
            .expect('Content-Type', 'text/html; charset=utf-8', done);
    });

    it('Test end', function (done) {
        request(app)
            .get('/')
            .end(function(err, res) {
                if (err) throw err;

                console.log(res.text);
                done();
            });
    });
});

describe('GET /registration', function () {
    it('Great user', function (done) {
        var user = {name: 'Bob'};

        request(app)
            .post('/')
            .set('Accept', 'application/json')
            .send(user)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;

                console.log(res.text);
                done();
            });
    });
});


describe('Registration Tests', function() {
    it('should return the user if the name is valid', function(done) {
        request(app)
            .post('/api/register')
            .send({name: 'JoshMatz'})
            .end(function(err, res) {
                expect(res.body.name).to.be.equal('JoshMatz');
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
});

describe('Login Tests', function() {
    it('should return the user if valid', function(done) {
        request(app)
            .post('/api/login')
            .send({userID: 0})
            .end(function(err, res) {
                expect(res.body.name).to.be.equal('JoshMatz');
                expect(res.statusCode).to.be.equal(200);
                done();
            });
    });
});