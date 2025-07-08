import { motion } from 'framer-motion';
import { projectsData } from '../../assets/data/projects';
import Card from '../UI/Card';
import './Projects.css';

const Projects = () => {
  return (
    <motion.section
      className="projects-section"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.5 }}
    >
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card project={project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;