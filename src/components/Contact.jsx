// src/components/Contact.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Get in touch</p>

      <div className="contact-container">
        {/* Left side - info */}
        <div className="contact-info">
          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Call Me</h4>
              <p>+62 821 2393 7272</p>
            </div>
          </div>
          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>fawwaz.sh700@gmail.com</p>
            </div>
          </div>
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Location</h4>
              <p>Jakarta Barat, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Right side - form */}
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="btn-send">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
