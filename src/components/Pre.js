import React, { useEffect, useRef } from "react";

function Pre(props) {
  const textRef = useRef(null);
  useEffect(() => {
    const text = "Loading...";
    let i = 0;
    let forward = true;
    let interval;
    function type() {
      if (textRef.current) {
        if (forward) {
          textRef.current.textContent = text.slice(0, i);
          if (i < text.length) {
            i++;
          } else {
            forward = false;
            setTimeout(type, 600);
            return;
          }
        } else {
          textRef.current.textContent = text.slice(0, i);
          if (i > 0) {
            i--;
          } else {
            forward = true;
            setTimeout(type, 400);
            return;
          }
        }
      }
      interval = setTimeout(type, 80);
    }
    type();
    return () => clearTimeout(interval);
  }, []);

  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <span className="preloader-typing" ref={textRef}></span>
      <span className="preloader-cursor">|</span>
    </div>
  );
}

export default Pre;
