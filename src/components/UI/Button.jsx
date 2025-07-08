import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, onClick, type = 'primary', ...props }) => {
  return (
    <motion.button
      className={`button ${type}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;