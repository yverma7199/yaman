import { motion } from 'framer-motion';
import './Social.css';

const Social = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yverma7199', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yaman-verma-0429a6370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: 'fab fa-linkedin' },
    { name: 'GIT', url: 'https://github.com/yverma7199', icon: 'fab fa-git' },
    { name: 'Instagram', url: 'https://www.instagram.com/yaman_verma1234/', icon: 'fab fa-instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com/yaman.verma.7140497', icon: 'fab fa-facebook' },
    { name: 'FIGMA', url: 'https://figma.com/@yamanverma', icon: 'fab fa-figma' },
    { name: 'Whatsapp', url: 'https://wa.me/+918168879409', icon: 'fab fa-whatsapp' },
    { name: 'Telegram', url: 'https://t.me/yverma7199', icon: 'fab fa-telegram' },
  ];

  return (
    <motion.section
      className="social-section"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Connect With Me</h2>
      <div className="social-grid">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <i className={`${social.icon} social-icon`}></i>
            <span>{social.name}</span>
          </motion.a>
        ))}
      </div>
      
      <div className="github-stats">
        {}
        <img 
          src="https://github-readme-stats.vercel.app/api?username=yverma7199&show_icons=true&theme=dracula" 
          alt="GitHub Stats" 
        />
      </div>
    </motion.section>
  );
};

export default Social;