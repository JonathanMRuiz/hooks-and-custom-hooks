import React, { useState, useEffect } from "react";

const ScrollHook = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const detectScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", detectScroll);
  }, []);

  return (
    <div className="scroll">
      <h2>Hooks - useEffect y ciclo de vida</h2>
      <p>Scroll del Navegador: {scrollY} px</p>
    </div>
  );
};

export default ScrollHook;
