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
    >
      doors
    </motion.div>
  );
};

export default Doors;
