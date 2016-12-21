function prueba (req,res){

    if(req.params.nombre){
        var nombre = req.params.nombre;
    }
    else{
        var nombre = 'sin nombre';
    }


    res.status(200).send({
        data:[1,2,3,4],
        message:"holas......"+nombre
    })

}

function  getFavorito(req,res){
    var favoritoID = req.params.id;

    res.status(200).send({
        message:"Obtener Favorito......",
        data:favoritoID
    })
}
function  getFavoritos(req,res){

    res.status(200).send(
        {
            message:"lista de favoritos"
        }
    )
}
function  saveFavorito(req,res){
    var params = req.body;

    res.status(200).send({
        favorito:params,
        titulo:params.titulo,
        url:params.url
    })

}
function  updateFavorito(req,res){
    var params = req.body;

    res.status(200).send({
        favorito:params,
        update:true
    })
}
function  deleteFavorito(req,res){
    var params = req.body;

    res.status(200).send({
        favorito:params,
        delete:true
    })
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}