var mongoose = require('mongoose')
var pokemonSchema = mongoose.Schema({
    title: String,
    nick: {
        type: String,
        unique: true,
        required: true
    },
    avatar: String,
    desc: String,
    created:{
        type:Date,
        default:Date.now
    }
})
module.exports.Pokemon = mongoose.model("Pokemon", pokemonSchema)
