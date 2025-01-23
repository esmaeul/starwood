import Feature from "./features/Feature";
import feat1 from "../../assets/images/features/1.png";
import feat2 from "../../assets/images/features/2.jpg";
import { useState, useRef, useEffect } from "react";

const Features = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const featureRef1 = useRef(null);
  const featureRef2 = useRef(null);
  const featureRef3 = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        if (featureRef1.current && featureRef2.current && featureRef3.current) {
          const feature1Bounds = featureRef1.current.getBoundingClientRect();
          const feature2Bounds = featureRef2.current.getBoundingClientRect();
          const feature3Bounds = featureRef3.current.getBoundingClientRect();

          if (
            feature1Bounds.top + feature1Bounds.height >= 0 &&
            feature1Bounds.bottom <= window.innerHeight
          ) {
            if (count1 < 65) {
              const intervalId = setInterval(() => {
                setCount1((prevCount) => prevCount + 1);
              }, 10); // Adjust interval for desired counting speed

              return () => clearInterval(intervalId);
            }
          }

          if (
            feature2Bounds.top + feature2Bounds.height >= 0 &&
            feature2Bounds.bottom <= window.innerHeight
          ) {
            if (count2 < 265) {
              const intervalId = setInterval(() => {
                setCount2((prevCount) => prevCount + 1);
              }, 10); // Adjust interval for desired counting speed

              return () => clearInterval(intervalId);
            }
          }

          if (
            feature3Bounds.top + feature3Bounds.height >= 0 &&
            feature3Bounds.bottom <= window.innerHeight
          ) {
            if (count3 < 26) {
              const intervalId = setInterval(() => {
                setCount3((prevCount) => prevCount + 1);
              }, 10); // Adjust interval for desired counting speed

              return () => clearInterval(intervalId);
            }
          }
        }
      }, 100); // Adjust delay as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [count1, count2, count3]);

  return (
    <div className="bg-globalColor5">
      <div className="title py-16 lg:mt-12 bg-globalColor0 bg-opacity-75">
        <div className="container section h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <Feature value={count1} desc={"Team Members"} ref={featureRef1} />
          <Feature value={count2} desc={"Success Partners"} ref={featureRef2} />
          <Feature
            value={count3}
            desc={"Years of Experience"}
            ref={featureRef3}
          />
        </div>
      </div>
      <div className="container grid grid-cols-2 gap-6 place-items-center my-16">
        <div className="md:col-span-1 col-span-full">
          <img className="max-h-full max-w-full" src={feat1} alt="" />
        </div>
        <div className="md:col-span-1 col-span-full">
          <img className="max-h-full max-w-full" src={feat2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
