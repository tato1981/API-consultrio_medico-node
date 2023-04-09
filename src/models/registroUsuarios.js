//const mongoose = require("mongoose");
import mongoose from 'mongoose'

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        requeri: true
    },
    apellidos: {
        type: String,
        requeri: true
    },
    email: {
        type: String,
        requeri: true
    },
    password: {
        type: String,
        requeri: true,
    },
    repet_password: {
        type: String,
        requeri: true,
    }
});

//module.exports = mongoose.model('Empleado', empleadoSchema);
export default mongoose.model('Usuario', usuarioSchema);