import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <motion.section 
      className="home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-content">
        <h1>Hi, I'm <span>YAMAN VERMA</span></h1>
        <h2>Frontend Developer</h2>
        <p>I build amazing web experiences</p>
      </div>
    </motion.section>
  );
};

export default Home;