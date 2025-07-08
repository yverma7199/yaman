import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.section className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="bio">
          <p>A highly motivated front-end developer with hands-on experience in building responsive, user-centric web applications using React.js. Skilled in developing modern UIs, integrating APIs, and optimizing performance for better user experience. Proficient in JavaScript, HTML, CSS, and familiar with backend integration using Node.js. Adept at working in collaborative, fast-paced environments and delivering clean, maintainable code.</p>
          {}
        </div>
        <div className="details-container">
          {}
          <div className="details-block">
            <h3>Personal Details</h3>
            <div className="details-list">
              <span className="details-badge">02 / 10 / 2004</span>
              <span className="details-badge">Gender : - Male</span>
              <span className="details-badge">Indian</span>
              <span className="details-badge">Unmarried</span>
            </div>
          </div>
          {}
          <div className="hobbies-block">
            <h3>Hobbies & Interests</h3>
            <div className="hobbies-list">
              <span className="hobby-badge">Travelling</span>
              <span className="hobby-badge">Listening to Music</span>
              <span className="hobby-badge">Badminton</span>
              <span className="hobby-badge">Table Tennis</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;