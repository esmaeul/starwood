import { useEffect } from "react";

const SingleDecor = ({ imgSrc, setCurrent }) => {
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = imgSrc;
  }, [imgSrc]);

  return (
    <div
      onClick={setCurrent}
      className="decor col-span-1 w-full h-60 rounded-lg overflow-hidden shadow-md flex items-center justify-center"
    >
      <div className="img w-full h-full cursor-pointer transition hover:scale-105 bg-gray-300">
        <img
          src={imgSrc}
          alt="Decor"
          className="w-full h-full object-cover pointer-events-none"
          loading="lazy"
          
        />
      </div>
    </div>
  );
};

export default SingleDecor;
