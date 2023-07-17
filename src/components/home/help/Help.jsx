import React, { useRef } from 'react';
import "./help.css"
import emailjs from '@emailjs/browser';

const Help = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1mdfod3', 'template_9cfok9l', form.current, 'TzP3QJTI-EO-ULp6G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className='container'>
            <h4>Centro de ayuda</h4> <br />
            <div>
              <input type='text' name="user_name" placeholder='Name' />
              <input type='email' name="user_mail"placeholder='Email' />
              <label>Mensaje</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
              </div>
        </div>
    </form>
  );
};
export default Help;