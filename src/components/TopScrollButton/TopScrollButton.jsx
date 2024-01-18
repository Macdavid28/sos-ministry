import React, { useState, useEffect } from "react";

import "./TopScrollButton.css"; // Your CSS file for styling
import UpArrow from "./svg/uparrow.svg";
const TopScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when user scrolls down 400px
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="top-scroll" >
          <img src={UpArrow} alt="Up arrow" />
        </button>
      )}
    </div>
  );
};

export default TopScrollButton;
