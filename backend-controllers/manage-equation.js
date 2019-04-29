let express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

// Equations Schema
let equationSchema = mongoose.Schema({
  name: String,
  description: String,
  equation: Array
});
let Equation = mongoose.model('Equation', equationSchema);

// save the equation
router.post('/save-equation', function(request, response) {
  console.log('request.body', request.body);
  let equation = {};

  equation = new Equation(request.body);
  equation.save(function(err) {
    if (err) throw err;
  });
  response.send({ message: 'Equation is seved successfully.' });
});

// edit the equation
router.put('/edit-equation', function(request, response) {
  let equation = request.body;
  console.log('equation', equation);
  Equation.findOneAndUpdate(
    { _id: equation._id },
    equation,
    { upsert: true },
    function(err, equation) {
      if (err) {
        if (err) throw err;
      } else {
        console.log('equation222', equation);
        response.send(equation);
      }
    }
  );
});

// get an equation by its id
router.get('/get-equation', function(request, response) {
  const id = request.query.id;
  console.log('id', id);
  Equation.find({ _id: id }, function(err, equation) {
    if (err) {
      if (err) throw err;
    } else {
      response.send(equation);
    }
  });
});

// delete any equation
router.delete('/delete-equation', function(request, response) {
  const id = request.query.id;
  console.log('id', id);
  Equation.remove({ _id: id }, function(err, equation) {
    if (err) {
      if (err) throw err;
    } else {
      response.send({ message: 'Equation is deleted.' });
    }
  });
});

// fetch all equations from database
router.get('/get-equations', function(request, response) {
  Equation.find({}, function(err, equations) {
    if (err) {
      if (err) throw err;
    } else {
      response.send(equations);
    }
  });
});

module.exports = router;
