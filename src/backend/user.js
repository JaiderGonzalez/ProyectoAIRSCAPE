// backend/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  NombreCompleto: {type: String, required: true},
  Documento: { type: String, required: true },
  correo: { type: String, required: true },
  contraseña: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
