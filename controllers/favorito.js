'use strict'
var Favorito = require('../models/favorito.js');  //modelo  puede se con .js o sin js


function prueba(req, res) {
    if (req.params.nombre) {
        var nombre = req.params.nombre;
    }
    else {
        var nombre = 'sin nombre';
    }
    res.status(200).send({
        data: [1, 2, 3, 4],
        message: "holas......" + nombre
    })
}
/**
 * Obtener un favorito
 */
function getFavorito(req, res) {

    var favoritoID = req.params.id;
    Favorito.findById(favoritoID, (err, favorito)=> {
        if (err) {
            res.status(500).send({message: 'Error al devolver el favorito...'})
        } else {
            if (!favorito) {
                res.status(404).send({message: 'No se encuentra favorito'});
            } else {
                res.status(200).send({
                    message: "Obtener un favorito......",
                    data: favorito
                });
            }
        }
    });
}
/**
 * Obtener Lista de Favoritos
 */
function getFavoritos(req, res) {

    Favorito.find({}).sort('-_id').exec((err, favoritos)=> {
        if (err) {
            res.status(500).send({message: 'error al devolder los favoritos'});
        } else {
            if (!favoritos) {
                res.status(400).send({message: 'No hay favoritos en BD'})
            } else {
                res.status(200).send({favoritos});//Si no hay errores muestra favoritos
            }

        }

    });
}
/**
 * Guardar un favorito
 */
function saveFavorito(req, res) {
    var favorito = new Favorito();

    var params = req.body;

    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;


    favorito.save((err, favoritoStored)=> {
        if (err) {
            res.status(500).send({message: 'Error al guardar favorito'});
        } else {
            res.status(200).send({
                message: 'Guardado con exito!',
                favorito: favoritoStored
            });
        }
    });
}
/**
 * Actualizar Favorito
 */
function updateFavorito(req, res) {
    var update = req.body;
    var favoritoID = req.params.id;

    // console.log(update);

    Favorito.findByIdAndUpdate(favoritoID, update, (err, favoritoUpdated)=> {
        if (err) {
            res.status(500).send({message: 'Error al Update el favorito'});
        }
        else {
            res.status(200).send({
                message: 'Actualizado Correctamente,',
                favorito: favoritoUpdated
            });
        }
    });


}
/**
 * Eliminar un favorito
 * @param req
 * @param res
 */
function deleteFavorito(req, res) {
    var favoritoID = req.params.id;

    Favorito.findById(favoritoID, (err, favorito)=> {
        if (err) {
            res.status(500).send({message: 'Error al eliminar el favorito...'})
        }

        if (!favorito) {
            res.status(404).send({message: 'No existe favorito'});
        } else {
            favorito.remove(err => {
                if (err) {
                    res.status(500).send({message: "Error al borrar favorito"});
                } else {
                    res.status(200).send({
                        message: "Favorito eliminado...",
                        data: favorito
                    });
                }
            });
        }
    });
}

/**
 * Exports
 * @type {{prueba: prueba, getFavorito: getFavorito, getFavoritos: getFavoritos, saveFavorito: saveFavorito, updateFavorito: updateFavorito, deleteFavorito: deleteFavorito}}
 */
module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}