import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              {...register("message", { 
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters"
                }
              })}
            />
            {errors.message && <span className="error">{errors.message.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: yamanverma02@gmail.com</p>
          <p>Phone: +91 81688 - 79409</p>
          <div className="social-links">
            {}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;