import React from 'react'
import errorIMG from "./pexels-kelly-2898316 (1).jpg"
import "./error.css"

const Error = () => {
  return (
    <div className="container-error">
      <h4>Lo sentimos. Esta pagina no esta en uso</h4>
      <img src={errorIMG} className='errorImg'></img>
      <button className='buton-error'><a href='/vuelos'>Volver</a></button>
    </div>
  )
}

export default Error