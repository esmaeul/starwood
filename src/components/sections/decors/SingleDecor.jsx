import { useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";

const SingleDecor = ({ imgSrc }) => {
  const [showImg, setShowImg] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // For managing loading state
  const imgRef = useRef(null);

  // Preload image
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = imgSrc;
    preloadImage.onload = () => {
      setIsLoading(false); // Set loading to false once the image is loaded
    };
  }, [imgSrc]);

  // Close modal when clicking outside the image
  useEffect(() => {
    const handleClickOutImg = (e) => {
      if (showImg && imgRef.current && !imgRef.current.contains(e.target)) {
        setShowImg(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutImg);

    return () => {
      document.removeEventListener("mousedown", handleClickOutImg);
    };
  }, [showImg]);

  return (
    <div className="decor col-span-1 w-full h-60 rounded-lg overflow-hidden shadow-md flex items-center justify-center">
      {/* Image Placeholder */}
      <div
        className={`img w-full h-full cursor-pointer transition hover:scale-105 bg-gray-300 ${
          isLoading ? "animate-pulse" : ""
        }`}
        onClick={() => setShowImg(true)}
      >
        {!isLoading && (
          <img
            src={imgSrc}
            alt="Decor"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      {showImg && (
        <div className="fixed top-0 left-0 py-16 bg-black z-50 bg-opacity-90 w-full h-screen overflow-hidden">
          <FaXmark
            className="text-white text-6xl absolute right-16 top-6 cursor-pointer"
            onClick={() => setShowImg(false)}
          />
          <motion.div
            className="container h-full"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <img
              ref={imgRef}
              src={imgSrc}
              decoding="async"
              alt="Decor"
              className="mx-auto w-fit h-full object-contain relative"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SingleDecor;
