import { useEffect, useState } from "react";

const UseWindowSize = () => {
  const [width, setWidth] = useState(undefined);
  const [Height, setHeight] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return { width, Height };
};

export default UseWindowSize;
