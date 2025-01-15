import { useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";

const SingleDecor = ({ imgSrc }) => {
  const [showImg, setShowImg] = useState(false);
  const imgRef = useRef(null);

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
      <div
        className="img w-full h-full cursor-pointer transition hover:scale-105"
        onClick={() => setShowImg(true)}
      >
        <img src={imgSrc} alt="Decor" className="w-full h-full object-cover" />
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
