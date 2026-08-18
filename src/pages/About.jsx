import Header from '../components/Header';
import '../styles/about.css';

const focusAreas = [
  'Web Design',
  'UI/UX Design',
  'Visual Design',
  'Motion Graphics',
];
const tools = ['Ps', 'Ai', 'Id', 'Ae', 'VS'];

function About() {
  return (
    <div className="page about-page">
      <Header />

      <main className="about-main">
        <section className="about-intro">
          <h1>Designing interactive digital archives.</h1>
        </section>

        <section className="about-profile about-grid">
          <div className="about-card profile-card">
            <div>
              <span className="eyebrow">PROFILE . 01</span>
              <h2>윤 / SANGSANG UNIVERSITY STUDENT</h2>
              <p>
                Focused on Interactive Web Design. Exploring the intersection of
                structured information architecture and fluid digital
                experiences to create functional, aesthetically rigorous
                interfaces.
              </p>
            </div>

            <div className="profile-figure">
              <span>FIG. 1</span>
            </div>
          </div>

          <div className="about-data">
            <InfoSection title="FOCUS AREAS . 02">
              {focusAreas.map((item) => (
                <div className="info-row" key={item}>
                  <i />
                  <span>{item}</span>
                </div>
              ))}
            </InfoSection>

            <InfoSection title="TOOLKIT . 03">
              <div className="tool-list">
                {tools.map((tool) => (
                  <span
                    className={`tool-icon tool-${tool.toLowerCase()}`}
                    key={tool}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </InfoSection>

            <InfoSection title="SKILLS . 04">
              <p className="skills-copy">
                Interactive web design, interface design, motion, visual
                systems, and front-end implementation.
              </p>
            </InfoSection>
          </div>
        </section>

        <section className="about-connect">
          <span className="eyebrow">CONNECT . 05</span>
          <a href="mailto:jyiyoon.design@gmail.com">jyiyoon.design@gmail.com</a>
        </section>
      </main>

      <footer className="about-footer">
        <strong>WORK LIBRARY</strong>
        <span>© 2026 WORK LIBRARY. ALL RIGHTS RESERVED.</span>
        <div>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Behance</a>
        </div>
      </footer>
    </div>
  );
}

function InfoSection({ title, children }) {
  return (
    <section className="info-section">
      <span className="eyebrow">{title}</span>
      <div>{children}</div>
    </section>
  );
}

export default About;
