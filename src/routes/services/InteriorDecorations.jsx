import { motion } from "framer-motion";
import { useContext } from "react";
import MotionContext from "../../context/MotionContext";
const InteriorDecorations = () => {
  const { containerVariants } = useContext(MotionContext);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className=""
    >
      InteriorDecorations
    </motion.div>
  );
};

export default InteriorDecorations;
