import React from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, location, price} = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <p> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''></label>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard