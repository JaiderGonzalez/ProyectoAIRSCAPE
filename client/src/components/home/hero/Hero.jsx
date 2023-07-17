import React from "react"
import Heading from "../../main/Heading"
import "./hero.css"


const Hero = () => {
    return (
      <>
        <section className='hero'>
          <div className='container'>
            <Heading title='!Destino, País de nunca Jamas¡' subtitle='El hombre debe elevarse por encima de la Tierra, hasta la cima de la atmósfera y más allá, porque sólo así comprenderá completamente el mundo en el que vive' />
  
            <form className='flex'>
              <div className='box'>
                <span>Origen</span>
                <input type='text' placeholder='Bucaramanga' />
              </div>
              <div className='box'>
                <span>Destino-Ciudad</span>
                <input type='text' placeholder='' />
              </div>
              <div className='box'>
                <span>Salida</span>
                <input type='date' placeholder='Property Type' />
              </div>
              <div className='box'>
                <span>Precio</span>
                <input type='text' placeholder='' />
              </div>
              <div className='box'>
                <h4>Filtrado</h4>
              </div>
              <button className='btn1'>
                <a>Buscar</a>
              </button>
            </form>
          </div>
        </section>
      </>
    )
  }
  
  export default Hero