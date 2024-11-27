const express = require('express');
const cors = require('cors'); // Importa cors después de express
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const turnosRouter = require('./routes/turnos');
const usuariosRoutes = require('./routes/usuarios'); 

dotenv.config(); // Carga las variables de entorno al inicio

const app = express(); // Inicializa express

// Middleware
app.use(cors()); // Habilita CORS para todas las solicitudes
app.use(express.json()); // Middleware para parsear JSON

// Usar las rutas de usuarios en /api/usuarios
app.use('/api/usuarios', usuariosRoutes);

// Usar las rutas de turnos en /api/turnos
app.use('/api/turnos', turnosRouter);

console.log("URI de MongoDB:", process.env.MONGODB_URI); // Confirmación de la URI

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch((error) => console.error("Error de conexión:", error));

// Ruta base para confirmar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor de reserva de turnos funcionando');
});

// Puerto para Render o predeterminado a 
const PORT = process.env.PORT || 10000;  // O el puerto que Render asigna dinámicamente

// Escuchar en todas las interfaces (0.0.0.0) para permitir que Render se conecte correctamente
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
