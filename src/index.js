require('babel-register');

const app = require('./app');
const db = require('./models/db');
const environment = process.env.NODE_ENV || 'development';    // set environment
const PORT = parseInt(process.env.PORT, 10) || 8081;

db.sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, function () {
      console.log('Example app listening on port ' + PORT);
    });
  }, (err) => {
    console.log("An error occurred while creating the table:", err);
  });