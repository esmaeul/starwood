import { useEffect, useRef, useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

import SingleDecor from "../../components/sections/decors/SingleDecor";
import Lightbox from "../../components/sections/decors/LightBox";
import { useTranslation } from "react-i18next";

// Import images dynamically (choose Webpack or Vite method)
const images = import.meta.glob(
  "../../assets/images/activities/doors/exterior-designs/*.{png,jpg,jpeg,webp}",
  { eager: true }
);
const extDesImgs = Object.values(images).map((img) => img.default);

const ExteriorDecorations = () => {
  const { t } = useTranslation("decorations");

  const imgRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => setCurrent((prev) => (prev + 1) % extDesImgs.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + extDesImgs.length) % extDesImgs.length);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (imgRef.current && !imgRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bg-globalColor5 py-10 select-none">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="main-heading col-span-full mb-8 w-fit mx-auto flex flex-col gap-1.5">
          <h2 className="text-4xl text-globalColor0">
            {t("exteriorDecorations")}
          </h2>
        </div>
        {extDesImgs.map((imgSrc, index) => (
          <SingleDecor
            key={index}
            imgSrc={imgSrc}
            setCurrent={() => {
              setCurrent(index);
              setShowModal(true);
            }}
          />
        ))}
        {showModal && (
          <Lightbox
            current={current}
            images={extDesImgs}
            imgRef={imgRef}
            onClose={() => setShowModal(false)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </div>
    </div>
  );
};

export default ExteriorDecorations;
