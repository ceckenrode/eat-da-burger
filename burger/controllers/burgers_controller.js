var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var burger = require('../models/burger.js');

router.use(bodyParser.urlencoded({
  extended: false
}));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req,res) {
  burger.all(function(data){
    res.render('index', {data : data});
  });
});

router.post('/delete/:burger_name', function(req,res) {
  var burger_name = req.params.burger_name;
  burger.delete(burger_name, function(data){
    res.redirect('/');
  });
});

router.post('/eat/:burger_name', function(req,res) {
  var burger_name = req.params.burger_name;
  burger.eat(burger_name, function(data){
    res.redirect('/');
  });
});

router.post('/add/', urlencodedParser, function(req,res) {
  var burger_name = req.body.burgertoadd;
  burger.add(burger_name, function(data){
    res.redirect('/');
  });
});

module.exports = router;