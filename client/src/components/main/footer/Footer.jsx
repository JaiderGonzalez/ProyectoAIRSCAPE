import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { BsTwitter } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import { ImFacebook } from "react-icons/im"
import { BsDiscord } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <h2>AIRSCAPE</h2>
            </div>
          </div>
          <section>
          <div className="box">
              <h3>CONTACTOS</h3>
              <ul>
                <a href="https://www.instagram.com/jaidergoonzalez/"><AiFillInstagram className="icon"/>Instagram</a>
                <a href="https://twitter.com/Jaiider_1"><BsTwitter className="icon"/>Twitter</a>
                <a href="https://www.facebook.com/jaider.gomzales"><ImFacebook className="icon"/>Facebook</a>
                <a href="https://discord.gg/xD2Nsb6q"><BsDiscord className="icon"/>Discord</a>
                <a href="https://www.youtube.com/watch?v=85Byj7l0p98&ab_channel=JkingMaximan"><BsYoutube className="icon"/>Youtube</a>
              </ul>
            </div>
          </section>
        </div>
      </footer>
      <div className='legal'>
        <span>Designers. Jaider Gonzalez &
            Daniel Barrera
        </span>
      </div>
    </>
  )
}

export default Footer