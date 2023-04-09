import express from 'express'
import pacienteSchema from '../models/registroPacientes.js'

const router = express.Router();

//routes
//create empleado
router.post('/paciente', (req, res) =>{
    //res.send('crear usuario');
    const paciente = pacienteSchema(req.body);
    paciente
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//obtener todos los empleados
router.get('/paciente', (req, res) =>{
    //res.send('crear empleado');
    pacienteSchema    
    .find()  //.find = encontrar
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//encontrar un empleados
router.get('/paciente/:id', (req, res) =>{
    //res.send('crear empleado');
    const {id} = req.params;
    pacienteSchema    
    .findById(id)  //.findById = encontrar por el ID
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});



//actualizar un empleado
router.put('/paciente/:id', (req, res) =>{
    //res.send('crear empleado');
    const {id} = req.params;
    const {nombre, apellidos, documento, fecha_nacimiento, edad, email, direccion, telefono, servicio_salud}= req.body;
    pacienteSchema    
    .updateOne({_id: id}, { $set:{nombre, apellidos, documento, fecha_nacimiento, edad, email, direccion, telefono, servicio_salud}})  //.updateOne = actualizar un empleado
    .then((data) => res.json(data))
    .catch((error) => res.json( {message: error} ) )
});



//eliminarun empleado
router.delete('/paciente/:id', (req, res) =>{
    //res.send('crear empleado');
    const { id } = req.params;
    pacienteSchema    
    .deleteOne({ _id : id })  //.deliteOne = eliminar empleado por el ID
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});


//module.exports = router
export default router