// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db-config');
const User = require('./user');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB(); // Establecer conexión a la base de datos

// Ruta para registrar un nuevo usuario
app.post('/registro', async (req, res) => {
  try {
    const { NombreCompleto, Documento, correo, contraseña } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    const usuarioExistente = await User.findOne({ correo });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El usuario ya está registrado' });
    }

    // Crear un nuevo usuario utilizando el modelo User y los datos recibidos del formulario
    const nuevoUsuario = new User({ NombreCompleto,Documento, correo, contraseña });

    // Guardar el nuevo usuario en la base de datos
    await nuevoUsuario.save();

    res.status(200).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error al registrar el usuario', error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});