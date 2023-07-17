import React, { useRef } from 'react';
import "./help.css"
import emailjs from '@emailjs/browser';

const Help = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1mdfod3', 'template_9cfok9l', form.current, 'u3FWYCDd_CApP0bOv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' name="user_name" placeholder='Name' />
              <input type='text' name="user_mail"placeholder='Email' />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
              </div>
          </form>
        </div>
    </form>
  );
};
export default Help;