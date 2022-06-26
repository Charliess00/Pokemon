var express = require('express')
var router = express.Router()
var Pokemon = require("../models/pokemon").Pokemon
/* GET home page. */


router.get('/', function(req, res, next) {
  Pokemon.find({},{_id:0,title:1,nick:1},function(err,menu){
    req.session.greeting = "Hi!!!"
    res.cookie('greeting', 'Hi!!!').render('index', {
      title: 'Благословение небожителей',
      counter: req.session.counter
    });
  })
});

module.exports = router;
