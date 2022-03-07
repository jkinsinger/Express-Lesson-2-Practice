var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/', function(req, res){
  res.send('You successfulyl created a POST route!')
});

router.get('/', function(req, res){
  res.send('You successfully created a GET route!')
});

router.put('/', function(req, res){
  res.send('You successfully created a PUT route!')
});

router.delete('/', function (req, res){
  res.send('You successfully created a DELETE route')
});

module.exports = router;
