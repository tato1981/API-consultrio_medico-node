//const mongoose = require("mongoose");
import mongoose from 'mongoose'

const pacienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        requeri: true
    },
    apellidos: {
        type: String,
        requeri: true
    },
    documento: {
        type: Number,
        requeri: true
    },
    fecha_nacimiento: {
        type: String,
        requeri: true,
    },
    edad: {
        type: Number,
        requeri: true,
    },
    email: {
        type: String,
        requeri: true
    },
    direccion: {
        type: String,
        requeri: true,
    },
    telefono: {
        type: Number,
        requeri: true,
    },
    servicio_salud: {
        type: String,
        requeri: true,
    },
});

//module.exports = mongoose.model('Empleado', empleadoSchema);
export default mongoose.model('Paciente', pacienteSchema);