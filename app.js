"use strict"
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito');


app.use(bodyParser.urlencoded({extented: false}));//middleware  llama a otro metodo antes de recibir httpd
app.use(bodyParser.json()); //que lo devuelva como json

app.use('/api', api);
app.use((req,res,next)=>{
   res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-With, Content-Type, Accept,Access-Control-Request-Method')
    res.header('Access-Control-Allow-Methods','POT,GET, OPTIONS,PUT,DELETE')
    res.header('Allor','POT,GET, OPTIONS,PUT,DELETE')
    next();  //para que se salga de la funcion
});


module.exports = app;


