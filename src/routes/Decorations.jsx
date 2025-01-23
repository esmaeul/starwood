import SingleDecor from "../components/sections/decors/SingleDecor";

import decorImg0 from "../assets/images/decorations/0.png";
import decorImg1 from "../assets/images/decorations/1.png";
import decorImg2 from "../assets/images/decorations/2.png";
import decorImg3 from "../assets/images/decorations/3.png";
import decorImg4 from "../assets/images/decorations/4.png";
import decorImg5 from "../assets/images/decorations/5.png";
import decorImg6 from "../assets/images/decorations/6.png";
import decorImg7 from "../assets/images/decorations/7.png";
import decorImg8 from "../assets/images/decorations/8.png";
import decorImg9 from "../assets/images/decorations/9.png";
import decorImg10 from "../assets/images/decorations/10.png";
import decorImg11 from "../assets/images/decorations/11.png";
import decorImg12 from "../assets/images/decorations/12.png";
import decorImg13 from "../assets/images/decorations/13.png";
import decorImg14 from "../assets/images/decorations/14.png";
import decorImg15 from "../assets/images/decorations/15.png";
import decorImg16 from "../assets/images/decorations/16.png";
import decorImg17 from "../assets/images/decorations/17.png";
import decorImg18 from "../assets/images/decorations/18.png";
import decorImg19 from "../assets/images/decorations/19.png";
import decorImg20 from "../assets/images/decorations/20.png";
import decorImg21 from "../assets/images/decorations/21.png";
import decorImg22 from "../assets/images/decorations/22.png";
import decorImg23 from "../assets/images/decorations/23.png";
import decorImg24 from "../assets/images/decorations/24.png";
import decorImg25 from "../assets/images/decorations/25.png";
import decorImg26 from "../assets/images/decorations/26.png";
import decorImg27 from "../assets/images/decorations/27.png";
import decorImg28 from "../assets/images/decorations/28.png";
import decorImg29 from "../assets/images/decorations/29.png";
import decorImg30 from "../assets/images/decorations/30.png";
import decorImg31 from "../assets/images/decorations/31.png";
import decorImg32 from "../assets/images/decorations/32.png";
import decorImg33 from "../assets/images/decorations/33.png";
import decorImg34 from "../assets/images/decorations/34.png";
import decorImg35 from "../assets/images/decorations/35.png";
import decorImg36 from "../assets/images/decorations/36.png";
import decorImg37 from "../assets/images/decorations/37.png";
import decorImg38 from "../assets/images/decorations/38.png";
import decorImg39 from "../assets/images/decorations/39.png";
import decorImg40 from "../assets/images/decorations/40.png";
import decorImg41 from "../assets/images/decorations/41.png";
import decorImg42 from "../assets/images/decorations/42.png";
import decorImg43 from "../assets/images/decorations/43.png";
import decorImg44 from "../assets/images/decorations/44.png";
import decorImg45 from "../assets/images/decorations/45.png";
import decorImg46 from "../assets/images/decorations/46.png";

import { useEffect, useRef, useState } from "react";
import Lightbox from "../components/sections/decors/LightBox";

const Decorations = () => {
  const decorImgs = [
    decorImg0,
    decorImg1,
    decorImg2,
    decorImg3,
    decorImg4,
    decorImg5,
    decorImg6,
    decorImg7,
    decorImg8,
    decorImg9,
    decorImg10,
    decorImg11,
    decorImg12,
    decorImg13,
    decorImg14,
    decorImg15,
    decorImg16,
    decorImg17,
    decorImg18,
    decorImg19,
    decorImg20,
    decorImg21,
    decorImg22,
    decorImg23,
    decorImg24,
    decorImg25,
    decorImg26,
    decorImg27,
    decorImg28,
    decorImg29,
    decorImg30,
    decorImg31,
    decorImg32,
    decorImg33,
    decorImg34,
    decorImg35,
    decorImg36,
    decorImg37,
    decorImg38,
    decorImg39,
    decorImg40,
    decorImg41,
    decorImg42,
    decorImg43,
    decorImg44,
    decorImg45,
    decorImg46,
  ];

  const imgRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % decorImgs.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + decorImgs.length) % decorImgs.length);
  };

  // Handle clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (imgRef.current && !imgRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-globalColor5 py-10">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="main-heading col-span-full mb-8 w-fit mx-auto flex flex-col gap-1.5">
          <h2 className="text-4xl text-globalColor0">
            Some of Decors We Offer
          </h2>
          <p className="my-6 mx-auto w-fit font-light">
            We Provide Decors what you really need.
          </p>
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
