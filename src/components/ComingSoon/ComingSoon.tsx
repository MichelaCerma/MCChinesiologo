import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import styles from './ComingSoon.module.scss';
import imageComingSoon from '../../assets/images/imageComingSoon.jpg';


const imageAlt = 'Anteprima del progetto in arrivo';
const instagramUrl = 'https://www.instagram.com/mc.chinesiologia?utm_source=qr&igsi=MWpqb3B5eW0wN3gwZA%3D%3D';
// const facebookUrl = 'https://facebook.com/';
const whatsappUrl = 'https://wa.me/393393223309';

const ComingSoon: React.FC = () => {
  return (
    <div className={styles.comingSoon}>
      {/* Metà sinistra: foto */}
      <div className={styles.media}>
        <img src={imageComingSoon} alt={imageAlt} className={styles.image} />
        <div className={styles.mediaOverlay} aria-hidden="true" />
      </div>

      {/* Metà destra: contenuto */}
      <div className={styles.content}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowStripe} aria-hidden="true" />
            Mattia Ceccarini - Chinesiologo posturale
          </span>

          <h1 className={styles.title}>
            Coming
            <br />
            Soon
          </h1>

          <p className={styles.subtitle}>
            
            Il nuovo sito è in lavorazione. Per info o appuntamenti puoi scrivermi su WhatsApp o seguirmi sui social.
          </p>

          <div className={styles.socials}>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Seguimi su Instagram"
            >
              <FaInstagram />
            </a>

            {/* <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Seguici su Facebook"
            >
              <FaFacebookF />
            </a> */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Scrivimi su WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
