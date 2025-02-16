import { createContext } from "react";

const MotionContext = createContext();

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delay: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
  },
};

export const MotionProvider = ({ children }) => {
  const value = {
    containerVariants,
    itemVariants,
    imageVariants,
  };

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
};

export default MotionContext;
