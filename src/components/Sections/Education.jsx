import { motion } from 'framer-motion';
import { educationData } from '../../assets/data/education';
import './Education.css';

const Education = () => {
  return (
    <motion.section
      className="education-section"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.5 }}
    >
      <h2>Education & Certifications</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="timeline-content">
              <h3>{item.institution}</h3>
              <p className="degree">{item.degree}</p>
              <p className="date">{item.startDate} - {item.endDate}</p>
              <p className="description">{item.description}</p>
              {item.certificateUrl && (
                <a 
                  href={item.certificateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;