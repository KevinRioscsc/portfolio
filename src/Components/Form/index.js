import React, {useRef, useState} from 'react'
import './Form.css'
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();
    const [recieved, setRecieved] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yv2tdm7', 'template_p6kv8ym', form.current, 'user_v7bSkAJSjkEhZLdoUqKHF')
        .then((result) => {
            console.log(result.text);
            setRecieved(true)
        }, (error) => {
            console.log(error.text);
            setRecieved(false)
        });
        e.target.reset();
    };
    return (
        <div className='form'>
            <h1 className='mail_title'>Lets grab some coffee ...</h1>
            <form className='shadow5' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input placeholder='name' type="text" name="from_name" />
                <label>Email</label>
                <input placeholder='email' type="email" name="email" />
                <label>Message</label>
                <textarea  className='message' placeholder='Send Me a Message' name="message" />
                {(recieved) ? <h2 className='green correct'>Your message was send. I guess we should start making plans</h2> : null}
                <input className='button' type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Form
