import React from "react"
import Heading from "../../main/Heading"
import { information } from "../../data/Data"
import "./information.css"

const Information = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Información para tu viaje perfecto' />

          <div className='content grid3 mtop'>
            {information.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.turistico}</label>
                    <label>{item.fabricas}</label>
                    <label>{item.apartamentos}</label>
                  </p>
                  <button><a>Saber Más</a></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Information