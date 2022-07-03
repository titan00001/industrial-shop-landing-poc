import { useState, useEffect } from "react";

const useIsMobileViewport = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= parseInt("420", 10));
    const handleWindowResize = () =>
      setIsMobile(window.innerWidth <= parseInt("420", 10));
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { isMobile };
};

export default useIsMobileViewport;
