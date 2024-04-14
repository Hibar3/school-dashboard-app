import { useEffect, useState } from "react";

export const useSize = () => {
  let wSize: number[] = [0, 0];
  const [windowSize, setWindowSize] = useState([1440, 900]);
  if (typeof window !== "undefined") {
    // browser code
    useEffect(() => {
      const windowSizeHandler = () => {
        setWindowSize([window?.innerWidth, window?.innerHeight]);
      };
      window.addEventListener("resize", windowSizeHandler);

      return () => {
        window.removeEventListener("resize", windowSizeHandler);
      };
    }, []);
  } else {
    useEffect(() => {
      const windowSizeHandler = () => {
        setWindowSize([window?.innerWidth, window?.innerHeight]);
      };
      window.addEventListener("resize", windowSizeHandler);

      return () => {
        window.removeEventListener("resize", windowSizeHandler);
      };
    }, []);
  }

  return windowSize;
};
