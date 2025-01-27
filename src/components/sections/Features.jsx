import Feature from "./features/Feature";
import feat1 from "../../assets/images/features/1.jpg";
import feat2 from "../../assets/images/features/2.jpg";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation("features");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const featureRef1 = useRef(null);
  const featureRef2 = useRef(null);
  const featureRef3 = useRef(null);

  const targets = {
    count1: 65,
    count2: 265,
    count3: 26,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (featureRef1.current && featureRef2.current && featureRef3.current) {
        const feature1Bounds = featureRef1.current.getBoundingClientRect();
        // const feature2Bounds = featureRef2.current.getBoundingClientRect();
        // const feature3Bounds = featureRef3.current.getBoundingClientRect();

        // Check if any feature is visible
        if (
          feature1Bounds.top < window.innerHeight &&
          feature1Bounds.bottom > 0
        ) {
          // Start counting if at least one feature is in the viewport
          startCounting();
        } else {
          // Reset counts to 0 when the section is scrolled past
          setCount1(0);
          setCount2(0);
          setCount3(0);
        }
      }
    };

    const startCounting = () => {
      const duration = 5000; // Total time in ms for the animation
      const intervalTime = 20; // Interval for updates in ms
      const totalSteps = duration / intervalTime;

      // Calculate increment steps for each counter
      const increment1 = targets.count1 / totalSteps;
      const increment2 = targets.count2 / totalSteps;
      const increment3 = targets.count3 / totalSteps;

      let currentStep = 0;

      const intervalId = setInterval(() => {
        currentStep++;
        setCount1((prev) =>
          prev + increment1 > targets.count1
            ? targets.count1
            : prev + increment1
        );
        setCount2((prev) =>
          prev + increment2 > targets.count2
            ? targets.count2
            : prev + increment2
        );
        setCount3((prev) =>
          prev + increment3 > targets.count3
            ? targets.count3
            : prev + increment3
        );

        if (currentStep >= totalSteps) {
          clearInterval(intervalId); // Stop counting when all are complete
        }
      }, intervalTime);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targets.count1, targets.count2, targets.count3]);

  return (
    <div className="bg-globalColor5" id="featuers">
      <div className="title py-16 lg:mt-12 bg-globalColor0 bg-opacity-75">
        <div className="container section h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <Feature
            value={Math.floor(count1)}
            desc={t("feat1")}
            ref={featureRef1}
          />
          <Feature
            value={Math.floor(count2)}
            desc={t("feat2")}
            ref={featureRef2}
          />
          <Feature
            value={Math.floor(count3)}
            desc={t("feat3")}
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
