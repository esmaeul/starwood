import { motion } from "framer-motion";
import { forwardRef, useContext } from "react";
import MotionContext from "../../../context/MotionContext";

const Feature = forwardRef(({ value, desc }, ref) => {
  const { itemVariants } = useContext(MotionContext);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={itemVariants}
      ref={ref}
      className="flex flex-col justify-center items-center gap-1 p-5"
    >
      <h1 className="text-6xl font-semibold">+{value}</h1>
      <p className="text-md pl-6 font-light">{desc}</p>
    </motion.div>
  );
});

Feature.displayName = "Feature";

export default Feature;
