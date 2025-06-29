import { useRef, useEffect, useCallback } from "react";

const ClickSpark = ({
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "linear",
  extraScale = 1.0,
  children
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const now = performance.now();
    let active = false;
    for (const spark of sparksRef.current) {
      const elapsed = now - spark.start;
      if (elapsed > duration) continue;
      active = true;
      const t = elapsed / duration;
      // Linear burst
      const ease = t;
      const x = spark.x + Math.cos(spark.angle) * sparkRadius * ease * extraScale;
      const y = spark.y + Math.sin(spark.angle) * sparkRadius * ease * extraScale;
      ctx.save();
      ctx.globalAlpha = 1 - t;
      ctx.beginPath();
      ctx.arc(x, y, sparkSize, 0, 2 * Math.PI);
      ctx.fillStyle = spark.color;
      ctx.shadowColor = spark.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    }
    if (active) {
      requestAnimationFrame(animate);
    } else {
      sparksRef.current = [];
    }
  }, [duration, sparkRadius, sparkSize, extraScale]);

  const handleClick = useCallback(
    (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      // Use viewport coordinates for spark origin
      const x = e.clientX;
      const y = e.clientY;
      const now = performance.now();
      for (let i = 0; i < sparkCount; i++) {
        const angle = (2 * Math.PI * i) / sparkCount;
        sparksRef.current.push({
          x,
          y,
          angle,
          color: sparkColor,
          start: now
        });
      }
      requestAnimationFrame(animate);
    },
    [sparkCount, sparkColor, animate]
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9999
        }}
      />
      {children}
    </>
  );
};

export default ClickSpark; 