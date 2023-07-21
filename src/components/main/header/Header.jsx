import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./header.css"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isSecond, setisSecond] = useState(false);
    const cerrar = () => setisSecond(false);
    const abrir = () => setisSecond(true);

    const [NombreCompleto, setNombre] = useState('');
    const [Documento, setDocumento] = useState('');
    const [correo, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
  
      const data = {
        NombreCompleto: NombreCompleto,
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
        <>
        <nav>
            <div></div>
            <div className="nav-logo-container">AIRSCAPE</div>
            <div className={`navbar-links-container ${isOpen && "open"}`}>
                <a href="/vuelos">Vuelos</a>
                <a href="/informacion">Informacion</a>
                <a href="/ayuda">Ayuda</a>
                <a><Button variant="primary" to onClick={handleShow}>
        Login
      </Button></a>
      <a><Button variant="primary" to onClick={abrir}>
        Register
      </Button></a>
      
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
            
        </nav>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Documento</label>
            <input
              type="text"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Correo</label>
            <input
              type="email"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
            />
          </div>
          <div className="d-grid gap-2 mt-3">

          </div>
        </div></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
</Modal>

<Modal show={isSecond} onHide={cerrar}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><div className="Auth-form-content" onSubmit={handleSubmit}>
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>Nombre completo</label>
            <input
              type="text"
              value={NombreCompleto}
              onChange={(e) => setNombre(e.target.value)} placeholder='NombreCompleto'
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Documento</label>
            <input
              type="text"
              value={Documento}
              onChange={(e) => setDocumento(e.target.value)} placeholder='Documento'
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Correo</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setEmail(e.target.value)} placeholder='correo'
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)} placeholder='contraseña'
              className="form-control mt-1"
            />
          </div>
          <div className="d-grid gap-2 mt-3">

          </div>
        </div></Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant="primary" onClick={cerrar}>
            Enviar
          </Button>
        </Modal.Footer>
</Modal>
</>
    )
}
export default NavBar;