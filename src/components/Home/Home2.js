import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ProfilePic.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{ display: 'flex', alignItems: 'center' }}>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a curious student with a growing passion for <span className="purple">robotics</span>, <span className="purple">software engineering</span>, and <span className="purple">autonomous systems</span>. From writing <span className="purple">Python</span> scripts to building self-driving prototypes with <span className="purple">ROS2</span> and <span className="purple">Jetson Nano</span>, I enjoy learning by doing—and breaking things along the way (intentionally, of course 🛠️).
              <br />
              <br />I'm familiar with languages like <span className="purple">Python</span>, <span className="purple">C++</span>, and <span className="purple">Java</span>, and I've explored fields like <span className="purple">machine learning</span>, <span className="purple">data analysis</span>, and <span className="purple">autonomous navigation</span> through hands-on internships and personal projects.
              <br />
              <br />My current interests revolve around building <span className="purple">intelligent systems</span>—whether that's optimizing a <span className="purple">chess engine</span>, analyzing <span className="purple">real-world data</span>, or collaborating on <span className="purple">AI-driven tools</span> that solve meaningful problems.
              <br />
              <br />When I'm not coding, you'll find me <span className="purple">mentoring peers</span>, leading the <span className="purple">Robotics Club</span>, or chasing my next "aha" moment.
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ paddingTop: 0, display: 'flex', justifyContent: 'center' }}>
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="profile" 
                style={{
                  borderRadius: '50%',
                  border: '4px solid #c770f0',
                  boxShadow: '0 8px 32px rgba(199, 112, 240, 0.3)',
                  width: '280px',
                  height: '280px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ marginBottom: 12 }}>FIND ME ON</h1>
            <p style={{ marginBottom: 18 }}>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links" style={{ marginBottom: 12 }}>
              <li className="social-icons">
                <a
                  href="https://github.com/Wasif-Karim03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/wasif.karim.2003"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wasifkarim/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_was_if_3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <div style={{ marginTop: 8, fontSize: "1.15rem" }}>
              <span style={{ color: "#fff", opacity: 0.8 }}>Email: </span>
              <a href="mailto:mwkarim@owu.edu" style={{ color: "#c770f0", textDecoration: "underline", fontWeight: 600 }}>mwkarim@owu.edu</a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
