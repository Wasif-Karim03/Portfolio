import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TrueFocus from "../TrueFocus/TrueFocus";

function Home() {
  const imgRef = useRef(null);

  useEffect(() => {
    let frame;
    let t = 0;
    const animate = () => {
      t += 0.016; // ~60fps
      const radiusX = 16; // px
      const radiusY = 28; // px
      const x = Math.cos(t) * radiusX;
      const y = Math.sin(t) * radiusY;
      if (imgRef.current) {
        imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{ textAlign: "left", marginLeft: 0 }}>
                <div style={{ marginBottom: 0 }}>
                  <span className="hero-align" style={{ display: "block", fontSize: "3.5rem", fontWeight: 700, color: "#fff", letterSpacing: 2, lineHeight: 1.1 }}>
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: 0 }}>
                  <span className="hero-align" style={{ fontSize: "3.5rem", fontWeight: 900, color: "#fff", letterSpacing: 2, lineHeight: 1.1 }}>I'M</span>
                  <TrueFocus 
                    sentence="Wasif Karim"
                    manualMode={false}
                    blurAmount={3}
                    borderColor="#c770f0"
                    glowColor="rgba(199, 112, 240, 0.6)"
                    animationDuration={0.8}
                    pauseBetweenAnimations={1.5}
                  />
                </div>
              </div>

              <div style={{ textAlign: "left", marginTop: "2.5rem" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                ref={imgRef}
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", willChange: "transform" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
