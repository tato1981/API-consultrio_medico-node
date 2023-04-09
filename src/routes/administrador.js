import express from 'express'
import adminSchema from '../models/registroAdmin.js'

const router = express.Router();

//routes
//create empleado
router.post('/administrador', (req, res) =>{
    //res.send('crear usuario');
    const administrador = adminSchema(req.body);
    administrador
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//obtener todos los empleados
router.get('/administrador', (req, res) =>{
    //res.send('crear empleado');
    adminSchema    
    .find()  //.find = encontrar
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//encontrar un empleados
router.get('/administrador/:id', (req, res) =>{
    //res.send('crear empleado');
    const {id} = req.params;
    adminSchema    
    .findById(id)  //.findById = encontrar por el ID
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//actualizar un empleado
router.put('/administrador/:id', (req, res) =>{
    //res.send('crear empleado');
    const {id} = req.params;
    const {nombre, apellidos, email, password, repet_password}= req.body;
    adminSchema    
    .updateOne({_id: id}, { $set:{nombre, apellidos, email, password, repet_password}})  //.updateOne = actualizar un empleado
    .then((data) => res.json(data))
    .catch((error) => res.json( {message: error} ) )
});



//eliminarun empleado
router.delete('/administrador/:id', (req, res) =>{
    //res.send('crear empleado');
    const { id } = req.params;
    adminSchema    
    .deleteOne({ _id : id })  //.deliteOne = eliminar empleado por el ID
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//module.exports = router
export default router