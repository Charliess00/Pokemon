var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pokemon')
var async = require("async")
var data = require('./data.js').data
async.series([
        open,
        dropDatabase,
        requireModels,
        createPokemons
    ],
    function(err,result){
        mongoose.disconnect()
    })
function open(callback){
    mongoose.connection.on("open",callback)
}
function dropDatabase(callback){
    var db = mongoose.connection.db
    db.dropDatabase(callback)
}
function createPokemons(callback){
    async.each(data, function(pokemonData, callback){
            var pokemon = new mongoose.models.Pokemon(pokemonData)
            pokemon.save(callback)
        },
        callback)
}
function requireModels(callback){
    require("./models/pokemon").Pokemon
    async.each(Object.keys(mongoose.models),function(modelName){
            mongoose.models[modelName].ensureIndexes(callback)
        },
        callback
    )
}
