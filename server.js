var express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  app = express(),
  port = 3000,
  mongoose = require('mongoose');

// middlewares
app.use(bodyParser.json());
app.use(cors());

// import controllers
app.use(require('./backend-controllers/manage-equation'));

// serve the angular index file
const path = require('path');
app.use(express.static(__dirname + '/public'));

// connection to mongodb
// const database = 'mongodb://localhost/equationmanager';
const dbUri =
  'mongodb+srv://syed:syed%401234@cluster0-rnwen.mongodb.net/equationmanager?retryWrites=true';

mongoose.connect(dbUri, { useNewUrlParser: true }).then(
  () => {
    console.log('MongoDb is readay to use.');
  },
  err => {
    console.log('handle initial connection error to MongoDb:', err);
  }
);

var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server is listening on port:', port);
});
