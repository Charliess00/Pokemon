var express = require('express')
var router = express.Router()
var Pokemon = require("../models/pokemon").Pokemon
var async = require("async")
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маошрутов, начинающихся с pokemons')
});
/* Страница героев */
router.get('/:nick', function(req, res, next) {
    async.parallel([
            function(callback){
                Pokemon.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Pokemon.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var pokemon = result[0]
            var pokemons = result[1] || []
            if(!pokemon) return next(new Error("Нет такого героя в этой книжке"))
            res.render('pokemon', {
                title: pokemon.title,
                picture: pokemon.avatar,
                desc: pokemon.desc,
                menu: pokemons
            });
        })
})

module.exports = router
