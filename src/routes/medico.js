import express from 'express'
import medicoSchema from '../models/registroMedicos.js'

const router = express.Router();

//routes
//create empleado
router.post('/medico', (req, res) =>{
    //res.send('crear usuario');
    const medico = medicoSchema(req.body);
    medico
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//obtener todos los empleados
router.get('/medico', (req, res) =>{
    //res.send('crear empleado');
    medicoSchema    
    .find()  //.find = encontrar
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//encontrar un empleados
router.get('/medico/:id', (req, res) =>{
    //res.send('crear empleado');
    const {id} = req.params;
    medicoSchema    
    .findById(id)  //.findById = encontrar por el ID
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//actualizar un empleado
router.put('/medico/:id', (req, res) =>{
    //res.send('crear empleado');
    const {id} = req.params;
    const {nombre, apellidos, email, password, repet_password}= req.body;
    medicoSchema    
    .updateOne({_id: id}, { $set:{nombre, apellidos, email, password, repet_password}})  //.updateOne = actualizar un empleado
    .then((data) => res.json(data))
    .catch((error) => res.json( {message: error} ) )
});



//eliminarun empleado
router.delete('/medico/:id', (req, res) =>{
    //res.send('crear empleado');
    const { id } = req.params;
    medicoSchema    
    .deleteOne({ _id : id })  //.deliteOne = eliminar empleado por el ID
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});


//module.exports = router
export default router