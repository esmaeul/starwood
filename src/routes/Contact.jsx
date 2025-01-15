import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="min-h-screen">
      Contact
      <div>
        <div>Scroll down to see the animation</div>
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          I animate into view!
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
