import React from "react"
import Heading from "../../main/Heading"
import "./price.css"
import RecentCard from "./priceCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Vuelos Recientes' subtitle='NADIE SE DA CUENTA DE LO HERMOSO QUE ES VIAJAR, HASTA QUE VUELVE A CASA Y DESCANSA SOBRE SU ALMOHADA VIEJA Y CONOCIDA.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent