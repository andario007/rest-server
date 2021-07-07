const { response,request } = require('express');

const getUser = (req=request, res=response) => {

    const { estado, cc} = req.query;

    res.json({
        message: 'Ponte a la moda get desde controller',
        estado,
        cc
    })
}

const putUser = (req, res=response) => {
    res.json({
        message: 'Ponte a la moda put desde controller'
    })
}


const putUserParam = (req, res=response) => {
    const { id } = req.params;
    res.json({
        message: `Ponte a la moda put desde controller - parametro ${id}`
    })
}

const deleteUser = (req, res=response) => {
    res.json({
        message: 'Ponte a la moda delete desde controller'
    })
}


const postUser = (req, res=response) => {

    const { nombre ,edad } = req.body;

    res.json({
        message: 'Ponte a la moda post desde controller',
        nombre,
        edad
    })
}


module.exports = {
    getUser,
    putUser,
    deleteUser,
    postUser,
    putUserParam
}