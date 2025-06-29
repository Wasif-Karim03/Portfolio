import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import selfDrivingCar from "../../Assets/Projects/self-driving-car.jpg";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={selfDrivingCar}
              isBlog={false}
              title="Self Driving Car, using Jetson"
              description="For my CS 490 independent study with Dr. Hanliang Guo, I'm building a self-driving car using a Traxxas Slash 4x4, Jetson Nano, Raspberry Pi, Lidar, Pi camera, and ROS2. It uses A* for indoor navigation and GPS with Pixhawk for outdoor. I recently got obstacle avoidance working with Lidar. Now, I'm tackling traffic rule compliance—lots of coding, debugging, and head-scratching moments!"
              ghLink=""
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7250536387098095617/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Smart Graduation Ceremony System"
              description="A modern solution for large-scale graduation events. This system allows schools to streamline name announcements by uploading student data (name, major, awards) in advance. Each student receives a personalized QR code via email. During the ceremony, students simply scan their QR code at a designated station, triggering an automatic, human-like voice announcement of their name and achievements. It's efficient, accurate, and eliminates the need for manual name reading—perfect for events with thousands of graduates."
              ghLink="https://github.com/Wasif-Karim03/make_commencement_easy_again"
              demoLink="https://wasif-karim03.github.io/make_commencement_easy_again/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Finder"
              description="Finder is a swipe-based, eco-friendly marketplace built exclusively for university students. Inspired by Tinder, Finder makes it easy and fun to buy and sell used or unwanted items anonymously within your campus community. No names, no awkward meetups—just simple, local exchanges that help reduce waste and promote sustainability. Whether you're decluttering your dorm or looking for a budget-friendly find, Finder keeps it scam-free, travel-free, and stress-free. Connect, match, and trade—all in one tap."
              ghLink="https://github.com/Wasif-Karim03/Finder-Eco-Market-Place"
              demoLink="https://findar-usbq5f.flutterflow.app/"
            />
          </Col>

          <Col md={4} className="project-card"></Col>
          <Col md={4} className="project-card"></Col>
          <Col md={4} className="project-card"></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
