import { useState, useEffect } from "react";

const useScrollTop = () => {
  const [stick, setStick] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos > 300) {
        setStick(true);
      } else {
        setStick(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [stick]);

  return { stick };
};

export default useScrollTop;
