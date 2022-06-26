var express = require('express');
var router = express.Router();
var Pokemons = require("../models/pokemon").Pokemons

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маошрутов, начинающихся с pokemons');
});

/* Страница героев */
router.get('/:nick', function(req, res, next) {
    Pokemon.findOne({nick:req.params.nick}, function(err,pokemon){
        if(err) return next(err)
        if(!pokemon) return next(new Error("Нет такого покемона в этой книжке"))
        res.render('pokemon', {
            title: pokemon.title,
            picture: pokemon.avatar,
            desc: pokemon.desc
        })
    })
})


module.exports = router;