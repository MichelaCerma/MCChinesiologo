import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Contatti() {
  return (
    <section id="contatti" className="contacts">
      <h2 className="section-title">Contattami</h2>
      <p className="section-subtitle">
        Scrivimi o chiamami per prenotare la tua prima sessione
      </p>
      <div className="contacts-grid">
        <a href="tel:+393393223309" className="contact-item">
          <FaPhone />
          <div>
            <span className="contact-label">Telefono</span>
            <span className="contact-value">339 322 3309</span>
          </div>
        </a>
        <a
          href="mailto:mattiaceccarini.personaltrainer@gmail.com"
          className="contact-item"
        >
          <FaEnvelope />
          <div>
            <span className="contact-label">Email</span>
            <span className="contact-value">
              mattiaceccarini.personaltrainer@gmail.com
            </span>
          </div>
        </a>
      </div>
      <div className="social-grid">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link instagram"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link facebook"
        >
          <FaFacebook /> Facebook
        </a>
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link linkedin"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://www.tiktok.com/@"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link tiktok"
        >
          <SiTiktok /> TikTok
        </a>
      </div>
    </section>
  );
}
