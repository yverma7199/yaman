import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ project }) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="card-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="card-actions">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;