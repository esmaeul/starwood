import { motion } from "framer-motion";

const Reason = ({ icon, title, desc }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="col-span-1 flex flex-col hover:shadow-xl py-16 bg-white border border-globalColor4 w-full text-center hover:scale-90 gap-6 text-globalColor0 transition"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div variants={itemVariants} className="mx-auto text-3xl">
        {icon}
      </motion.div>
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl">{title}</h3>
      </motion.div>
      <motion.div variants={itemVariants}>
        {" "}
        {/* And here */}
        <p className="text-md mx-auto max-w-48 text-wrap">{desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default Reason;
