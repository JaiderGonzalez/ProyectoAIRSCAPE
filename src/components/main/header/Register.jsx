import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [NombreCompleto, setNombre] = useState('');
  const [Documento, setDocumento] = useState('');
  const [correo, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      NombreCompleto: NombreCompleto,
      Documento : Documento,
      correo: correo,
      contraseña: contraseña,
    };

    axios.post('http://localhost:3000/registro', data)
      .then((response) => {
        console.log(response.data);
        // Aquí puedes manejar la respuesta del servidor si es necesario
      })
      .catch((error) => {
        console.error('Error al enviar el formulario', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={NombreCompleto} onChange={(e) => setNombre(e.target.value)} placeholder="NombreCompleto" />
      <input type="text" value={Documento} onChange={(e) => setDocumento(e.target.value)} placeholder="Documento" />
      <input type="email" value={correo} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;