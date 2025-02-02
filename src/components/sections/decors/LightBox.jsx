import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Lightbox = ({ current, images, onClose, onNext, onPrev, imgRef }) => {
  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-90 w-full h-screen flex items-center justify-center z-50">
      {/* Close Button */}
      <FaXmark
        className="text-white text-4xl absolute top-6 right-8 cursor-pointer"
        onClick={onClose}
      />

      {/* Image */}
      <motion.div
        className="relative w-3/4 h-3/4 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        ref={imgRef}
      >
        {/* Previous Button */}
        <FaChevronLeft
          className="text-white text-4xl absolute md:left-16 -left-20 z-10 cursor-pointer"
          onClick={onPrev}
        />
        <img
          src={images[current]}
          alt={`Decor ${current}`}
          className="w-full h-full object-contain"
        />
        {/* Next Button */}
        <FaChevronRight
          className="text-white text-4xl absolute md:right-16 -right-20 z-10 cursor-pointer"
          onClick={onNext}
        />
      </motion.div>
    </div>
  );
};

export default Lightbox;
