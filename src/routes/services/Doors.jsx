import { motion } from "framer-motion";
import { useContext } from "react";
import MotionContext from "../../context/MotionContext";

const Doors = () => {
  const { containerVariants } = useContext(MotionContext);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ amount: 0.5 }}
    >
      doors
    </motion.div>
  );
};

export default Doors;
