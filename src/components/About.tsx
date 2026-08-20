import { FaUser } from "react-icons/fa";

export default function About() {
  return (
    <section id="chi-sono" className="about">
      <h2 className="section-title">Chi Sono</h2>
      <div className="about-content">
        <div className="about-photo-placeholder">
          <FaUser />
        </div>
        <div className="about-info">
          <h3>Mattia Ceccarini</h3>
          <ul className="about-credentials">
            <li>
              <span className="credential-dot" />
              Laurea in Scienze Motorie (L22)
            </li>
            <li>
              <span className="credential-dot" />
              Master di primo livello in Chinesiologo per le palestre della
              salute
            </li>
            <li>
              <span className="credential-dot" />
              Personal Trainer Specialist (indirizzo Postural Integration)
              &ndash; Elav Fitness School
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
