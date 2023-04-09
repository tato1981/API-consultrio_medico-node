//const express = require('express');
//const empleadoSchema = require("../models/empleadomodels")
//const router = express.Router();

import express from 'express'
import usuarioSchema from '../models/registroUsuarios.js'

const router = express.Router();

//routes
//create empleado
router.post('/usuario', (req, res) =>{
    //res.send('crear usuario');
    const usuario = usuarioSchema(req.body);
    usuario
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//obtener todos los empleados
router.get('/usuario', (req, res) =>{
    //res.send('crear empleado');
    usuarioSchema    
    .find()  //.find = encontrar
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//encontrar un empleados
router.get('/usuario/:id', (req, res) =>{
    //res.send('crear empleado');
    const {id} = req.params;
    usuarioSchema    
    .findById(id)  //.findById = encontrar por el ID
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//actualizar un empleado
router.put('/usuario/:id', (req, res) =>{
    //res.send('crear empleado');
    const {id} = req.params;
    const {nombre, apellidos, email, password, repet_password}= req.body;
    usuarioSchema    
    .updateOne({_id: id}, { $set:{nombre, apellidos, email, password, repet_password}})  //.updateOne = actualizar un empleado
    .then((data) => res.json(data))
    .catch((error) => res.json( {message: error} ) )
});



//eliminarun empleado
router.delete('/usuario/:id', (req, res) =>{
    //res.send('crear empleado');
    const { id } = req.params;
    usuarioSchema    
    .deleteOne({ _id : id })  //.deliteOne = eliminar empleado por el ID
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});








//module.exports = router
export default router