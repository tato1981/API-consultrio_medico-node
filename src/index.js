//const express = require('express');
//const mongoose = require('mongoose');
//require("dotenv").config();
//const empleadosRoutes = require("./routes/empleados")

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usuariosRoutes from './routes/usuario.js';
import medicosRoutes from './routes/medico.js'
import pacientesRoutes from './routes/medico.js'
import administradoresRouter from './routes/administrador.js'
dotenv.config({path: '.env'})


const app = express();
const port = process.env.PORT || 7000;


//middleware
app.use(express.json())
app.use('/api', usuariosRoutes)
app.use('/api', medicosRoutes)
app.use('/api', pacientesRoutes)
app.use('/api', administradoresRouter)


//route
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API ')
});


//mongodb conection
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Base de datos conectada'))
.catch((error) => console.error(error))


//servidor app
app.listen(port, ()=> console.log('El servidor esta funcionando por el puerto', port))

