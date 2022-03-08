var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// practice HTTP Verbs w/ Postman
// router.post('/', function(req, res){
//   res.send('You successfulyl created a POST route!')
// });

// router.get('/', function(req, res){
//   res.send('You successfully created a GET route!')
// });

// router.put('/', function(req, res){
//   res.send('You successfully created a PUT route!')
// });

// router.delete('/', function (req, res){
//   res.send('You successfully created a DELETE route')
// });

// defining parameters in a URL w/ Postman

// router.get ('/', function (req, res){
//   let queryName = req.query.name;
//   if (queryName) {
//     res.send('Welcome to the page ' + queryName )
//   } else {
//     res.send('Sad, no one is here!');
//   }
// })

//checking against an array w/ Postman

let animals = ['pig', 'goat', 'dog', 'cat']

router.get ('/', function (req, res, next){
  let queryAnimal = req.query.animal;

  if(animals.includes(queryAnimal)) {
    res.send('Yep, we have a ' + queryAnimal + '.');
  } else {
    res.send('Nope, no ' + queryAnimal + ' here.')
  }
});

//using req.body w/ Postman

router.post('/', function(req, res, next){
  let bodyAnimal = req.body;

  if(animals.includes(bodyAnimal.animal)) {
    res.send('Already have a ' + bodyAnimal.animal + ' thanks.'); 
  } else {
    animals.push(bodyAnimal.animal);
    res.send(animals);
  }
});
module.exports = router;
