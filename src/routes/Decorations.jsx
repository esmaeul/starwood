import { useEffect, useRef, useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

import SingleDecor from "../components/sections/decors/SingleDecor";
import Lightbox from "../components/sections/decors/LightBox";
import { useTranslation } from "react-i18next";

// Import images dynamically (choose Webpack or Vite method)
const images = import.meta.glob(
  "../assets/images/decorations/*.{png,jpg,jpeg,webp}",
  { eager: true }
);
const decorImgs = Object.values(images).map((img) => img.default);

const Decorations = () => {
  const { t } = useTranslation("decorations");

  const imgRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => setCurrent((prev) => (prev + 1) % decorImgs.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + decorImgs.length) % decorImgs.length);

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-globalColor5 py-10">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="main-heading col-span-full mb-8 w-fit mx-auto flex flex-col gap-1.5">
          <h2 className="text-4xl text-globalColor0">{t("title")}</h2>
          <p className="my-6 mx-auto w-fit font-light">{t("subTitle")}</p>
        </div>
        {decorImgs.map((imgSrc, index) => (
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
            images={decorImgs}
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

export default Decorations;
