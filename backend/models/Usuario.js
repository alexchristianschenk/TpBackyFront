const mongoose = require('mongoose');

// Esquema para los datos del usuario
const usuarioSchema = new mongoose.Schema({
    jugador: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
