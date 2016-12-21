"use strict"
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito');


app.use(bodyParser.urlencoded({extented: false}));//middleware  llama a otro metodo antes de recibir httpd
app.use(bodyParser.json()); //que lo devuelva como json
app.use('/api', api)


module.exports = app;


