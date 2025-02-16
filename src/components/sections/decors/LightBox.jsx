import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Lightbox = ({ current, images, onClose, onNext, onPrev, imgRef }) => {
  const [direction, setDirection] = useState(0);

  // Handle keyboard navigation (Arrow keys + Esc)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setDirection(1);
        onNext();
      }
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        onPrev();
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onClose]);

  // Animation Variants
  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={onClose} // Click outside to close
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[90vh] flex items-center justify-center"
          initial="enter"
          animate="center"
          exit="exit"
          variants={imageVariants}
          custom={direction}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()} // Prevent close on image click
          ref={imgRef}
        >
          {/* Close Button */}
          <FaXmark
            className="text-white text-4xl absolute top-4 right-6 cursor-pointer hover:opacity-70 transition"
            onClick={onClose}
          />

          {/* Previous Button */}
          <FaChevronLeft
            className="text-white text-4xl absolute left-4 md:left-8 cursor-pointer hover:opacity-70 active:scale-90 transition"
            onClick={() => {
              setDirection(-1);
              onPrev();
            }}
          />

          {/* Next Button */}
          <FaChevronRight
            className="text-white text-4xl absolute right-4 md:right-8 cursor-pointer hover:opacity-70 active:scale-90 transition"
            onClick={() => {
              setDirection(1);
              onNext();
            }}
          />
          {/* Image */}
          <motion.img
            key={current}
            src={images[current]}
            alt={`Lightbox ${current}`}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Lightbox;
