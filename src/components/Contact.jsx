import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>
      <span className="section-subtitle">Let's Get In Touch</span>

      <div className="contact-container">
        {/* Sisi Kiri - Info Kontak */}
        <div className="contact-info">
          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Telepon / WhatsApp</h4>
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
              <h4>Lokasi</h4>
              <p>Jakarta Barat, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Sisi Kanan - Form Pesan */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="email" placeholder="Email Anda" required />
          </div>
          <input type="text" placeholder="Subjek Pesan" required />
          <textarea placeholder="Tuliskan pesan Anda di sini..." rows="5" required></textarea>
          <button type="submit" className="btn-send">
            <FaPaperPlane style={{ marginRight: "8px" }} /> Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;