"use strict"
var mongoose = require('mongoose');
var app = require('./app.js');

var port = process.env.PORT || 3000; //variable de entorno configurada

//link:puerto/basedatos
mongoose.connect('mongodb://localhost:27017/favoritos', (err, res)=> {
        if (err) {
            throw err;
        } else {
            console.log('Conexión a Mongo DB correcta ');
            app.listen(port, function () {
                console.log(`Api REST favoritos funcionando en http://localhost:${port}`);
            });
        }
    });



