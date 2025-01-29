import React from "react";
import { useState, useEffect } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div>
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
};

export default WindowTracker;
