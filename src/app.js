var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/api', function(req, res) {
    res.send({
        version: '1.0.0'
    });
});

app.post('/registration', function(req, res) {
    res.send({success:true});
});

module.exports = app;