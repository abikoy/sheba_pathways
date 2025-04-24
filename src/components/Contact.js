import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [status, setStatus] = useState('');
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const result = await emailjs.sendForm(
        'service_759pp8h',
        'template_azy5st4',
        form.current,
        'jat07GJ41C5_atXuv'
      );

      if (result.text === 'OK') {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };


  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in Touch for Your Ethiopian Adventure</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Reach Out to Us</h2>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>Addis Ababa, Ethiopia</p>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <p>+251907624429</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <p>shebapathways@gmail.com
            </p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          
          <button type="submit" className="submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <div className="alert success">Message sent successfully!</div>
          )}
          {status === 'error' && (
            <div className="alert error">Failed to send message. Please try again.</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
