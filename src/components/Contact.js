import React, { useRef, useState } from 'react';
import axios from 'axios';
import './contact.css'; // Make sure to import your CSS file

export default function Contact({ userdetails }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const messageRef = useRef(null);
  const [formData, setFormData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get values from useRef
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const message = messageRef.current.value;

    // Use Axios to send the form data to the server
    try {
      const response = await axios.post('https://fashionstorebackend-vsw0.onrender.com/contactApp', {
        name,
        email,
        phoneNumber,
        message,
      });
      // Set the form data in state
      setFormData({ name, email, phoneNumber, message });
      console.log(response.data); // Log the server response
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='ccc'>
      <div className={`wrapperCon centered ${formData ? 'sent' : ''}`}>
        <article className="letter">
          <div className="side">
            <h1>Contact us</h1>
            <br></br>
            <p>
              <textarea ref={messageRef} placeholder="Your message" required></textarea>
            </p>
          </div>
          <div className="side">
            <p>
              <input ref={nameRef} type="text" defaultValue={userdetails.name} readOnly/>
            </p>
            <p>
              <input ref={emailRef} type="email" defaultValue={userdetails.email} readOnly   />
            </p>
            <p>
              <input ref={phoneNumberRef} type="tel" defaultValue={userdetails.phone} readOnly/>
            </p>
            <p>
              <button id="sendLetter" onClick={handleSubmit}>
                Send
              </button>
            </p>
          </div>
        </article>
        <div className="envelope front"></div>
        <div className="envelope back"></div>
        {formData && (
          <p className="result-message centered">
            Thank you for your message, {formData.name} ! <br />
            Email: {formData.email} <br />
            Phone Number: {formData.phoneNumber} <br />
            Message: {formData.message}
          </p>
        )}
      </div>
    </div>
  );
}
