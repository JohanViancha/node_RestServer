const { response } = require('express');

const usuariosGet = (req = request, res = response)=>{
    const query = req.query;
    res.json({
        mes:'get API - Controlador',
        query
    });
}

const usuariosPost= (req, res = response)=>{
    const {nombre, edad} = req.body;


    res.json({
        mes:'POSt API - Controlador',
        nombre,
        edad
    });
}


const usuariosPut = (req, res = response)=>{
    const id = req.params.id
    res.json({
        mes:'Put API - Controlador',
        id
    });
}



const usuariosPatch = (req, res = response)=>{
    res.json({
        mes:'Patch API - Controlador'
    });
}

const usuariosDelete = (req, res = response)=>{
    res.json({
        mes:'Delete API - Controlador'
    });
}       

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost, 
    usuariosPut
}