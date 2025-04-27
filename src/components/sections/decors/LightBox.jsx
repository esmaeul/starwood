import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable"; // For swipe gestures

const Lightbox = ({ current, images, onClose, onNext, onPrev, imgRef }) => {
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload adjacent images
  useEffect(() => {
    const preloadImages = [
      images[current],
      images[(current + 1) % images.length],
      images[(current - 1 + images.length) % images.length],
    ].filter(Boolean);
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [current, images]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTransitioning) return;
      if (e.key === "ArrowRight") {
        setDirection(1);
        setIsTransitioning(true);
        onNext();
      }
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setIsTransitioning(true);
        onPrev();
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onClose, isTransitioning]);

  // Swipe gestures for mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (!isTransitioning) {
        setDirection(1);
        setIsTransitioning(true);
        onNext();
      }
    },
    onSwipedRight: () => {
      if (!isTransitioning) {
        setDirection(-1);
        setIsTransitioning(true);
        onPrev();
      }
    },
    trackMouse: true, // Allow mouse drag for desktop
    delta: 10, // Minimum swipe distance
  });

  // Animation Variants
  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    focus: { scale: 1.1 },
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-label="Image lightbox"
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
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
          onAnimationComplete={() => setIsTransitioning(false)}
          ref={imgRef}
          {...handlers} // Swipe handlers
        >
          {/* Close Button */}
          <button
            className="text-white text-3xl md:text-4xl absolute top-4 right-4 md:right-6 p-2 rounded-full bg-gray-800/50 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <FaXmark />
          </button>

          {/* Previous Button */}
          <motion.button
            className="text-white text-2xl md:text-3xl absolute left-4 md:left-10 p-4 rounded-full bg-gray-900/70 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              setDirection(-1);
              setIsTransitioning(true);
              onPrev();
            }}
            disabled={isTransitioning}
            aria-label="Previous image"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileFocus="focus"
            transition={{ duration: 0.2 }}
          >
            <FaChevronLeft />
          </motion.button>

          {/* Next Button */}
          <motion.button
            className="text-white text-2xl md:text-3xl absolute right-4 md:right-10 p-4 rounded-full bg-gray-900/70 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              setDirection(1);
              setIsTransitioning(true);
              onNext();
            }}
            disabled={isTransitioning}
            aria-label="Next image"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileFocus="focus"
            transition={{ duration: 0.2 }}
          >
            <FaChevronRight />
          </motion.button>

          {/* Image Counter */}
          <div className="absolute bottom-4 text-white text-sm md:text-base bg-gray-800/50 px-3 py-1 rounded">
            {current + 1} / {images.length}
          </div>

          {/* Image */}
          <motion.img
            key={current}
            src={images[current]}
            alt={`Image ${current + 1}`}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Lightbox;