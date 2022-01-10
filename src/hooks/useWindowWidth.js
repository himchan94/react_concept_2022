import React, { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resize);

    return () => {
      console.log("rm");
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
}
