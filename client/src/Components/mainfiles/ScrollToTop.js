import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScroll = () => {
    if (window.innerWidth < 400) {
      setIsVisible(false);
    } else if (window.scrollY > 2000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {isVisible && (
        <button
          onClick={scroll}
          className="fixed bottom-20 right-20 p-2 rounded-full shadow transition-opacity duration-900	"
        >
          <FaAngleDoubleUp size={30} style={{ color: "gray" }} />
        </button>
      )}
    </div>
  );
}
export default ScrollToTop;
