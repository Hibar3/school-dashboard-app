import { useEffect, useState } from "react";

export const useSize = () => {
  let wSize: number[] = [0, 0];
  const [windowSize, setWindowSize] = useState([1440, 900]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      const windowSizeHandler = () => {
        setWindowSize([window?.innerWidth, window?.innerHeight]);
      };
      window.addEventListener("resize", windowSizeHandler);

      return () => {
        window.removeEventListener("resize", windowSizeHandler);
      };
    }
  }, []);

  return windowSize;
};
