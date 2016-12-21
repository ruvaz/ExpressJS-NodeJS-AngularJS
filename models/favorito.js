'use strinct'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//objeto
var FavoritosSchema = Schema({
    title:String,
    description:String,
    url:String
});

//que es lo que devuelve retorna el objeto
module.exports = mongoose.model('Favorito',FavoritosSchema);

