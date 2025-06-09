import React from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Get in Touch</h2>

        <div className="contact-info">
          <p><FaPhoneAlt className="icon" /> <strong>Phone:</strong> +91 98765 43210</p>
          <p><FaEnvelope className="icon" /> <strong>Email:</strong> support@claypots.co.in</p>
        </div>

        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" placeholder="Type your feedback or enquiry..." required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="social-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
