import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import { FaGraduationCap, FaBullseye, FaFilm, FaQuoteLeft } from "react-icons/fa";

const sectionData = [
  {
    icon: <FaGraduationCap size={28} style={{ color: "#c770f0", marginRight: 12 }} />,
    title: "Education",
    content: (
      <div style={{ marginBottom: 0 }}>
        <div style={{ fontWeight: 800, fontSize: "1.35rem", marginBottom: 2 }}>
          <span style={{ color: "#d9534f" }}>Ohio Wesleyan University</span>
          <span style={{ color: "#fff", fontWeight: 700 }}> | Ohio, USA</span>
        </div>
        <div style={{ fontSize: "1.15rem", margin: "6px 0 0 0", color: "#fff", fontWeight: 500 }}>
          Computer Science (BA) | Astrophysics (BS)
        </div>
        <div style={{ fontSize: "1.08rem", marginTop: 10 }}>
          <span style={{ fontWeight: 700, color: "#fff" }}>Honors & Awards : </span>
          <span style={{ color: "#fff", fontWeight: 500 }}>
            Cambridge A-Level Scholarship | Schubert Scholarship | Honors Student
          </span>
        </div>
      </div>
    ),
  },
  {
    icon: <FaBullseye size={28} style={{ color: "#c770f0", marginRight: 12 }} />,
    title: "Hobbies & Personal Interests",
    content: (
      <ul style={{ marginBottom: 0 }}>
        <li>Watching robotics and AI documentaries</li>
        <li>Tinkering with Arduino, Raspberry Pi, and small electronics</li>
        <li>Playing and analyzing chess</li>
        <li>Exploring new web technologies and side projects</li>
        <li>Stargazing and learning about astrophysics</li>
        <li>Listening to instrumental or lo-fi music while coding</li>
      </ul>
    ),
  },
  {
    icon: <FaFilm size={28} style={{ color: "#c770f0", marginRight: 12 }} />,
    title: "Favorite Movies & Series",
    content: (
      <ul style={{ marginBottom: 0, fontStyle: "italic" }}>
        <li>The Imitation Game</li>
        <li>Interstellar</li>
        <li>The Social Network</li>
        <li>Mr. Robot</li>
        <li>Love, Death & Robots</li>
      </ul>
    ),
  },
  {
    icon: <FaQuoteLeft size={28} style={{ color: "#c770f0", marginRight: 12 }} />,
    title: "Favorite Quotes",
    content: (
      <ul style={{ marginBottom: 0, fontStyle: "italic" }}>
        <li>"Stay hungry, stay foolish." — Steve Jobs</li>
        <li>"Any sufficiently advanced technology is indistinguishable from magic." — Arthur C. Clarke</li>
        <li>"You don't learn to walk by following rules. You learn by doing, and by falling over." — Richard Branson</li>
      </ul>
    ),
  },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function AnimatedSectionCard({ section, idx }) {
  const ref = useRef();
  const inView = useInView(ref);
  const from = idx % 2 === 0 ? "-80px" : "80px";
  return (
    <div
      ref={ref}
      style={{
        background: "rgba(40,30,60,0.98)",
        borderRadius: 18,
        boxShadow: "0 8px 32px 0 rgba(199,112,240,0.13)",
        marginBottom: 40,
        padding: "2.2rem 2.2rem 2.2rem 1.5rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : `translateX(${from})`,
        transition: "all 1.4s cubic-bezier(.77,0,.18,1)",
        borderLeft: "4px solid #c770f0"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        {section.icon}
        <span style={{ color: "#c770f0", fontWeight: 800, fontSize: "1.45rem", letterSpacing: 0.5 }}>{section.title}</span>
      </div>
      <div style={{ color: "#fff", fontSize: "1.08rem", lineHeight: 1.7, textAlign: "left" }}>{section.content}</div>
    </div>
  );
}

function About() {
  return (
    <Container fluid className="about-section" style={{ minHeight: "100vh", padding: 0 }}>
      <Particle />
      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "40px 0 30px 0" }}>
        <img 
          src={laptopImg} 
          alt="about" 
          style={{ 
            maxWidth: "480px", 
            width: "100%", 
            height: "auto", 
            display: "block",
            opacity: 0,
            transform: "translateY(40px)",
            animation: "fadeInTopImg 1.2s cubic-bezier(.77,0,.18,1) 0.2s forwards, floatY 3.6s ease-in-out 1.4s infinite alternate"
          }} 
        />
      </div>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 16px" }}>
        {sectionData.map((section, idx) => (
          <AnimatedSectionCard key={section.title} section={section} idx={idx} />
        ))}
      </div>
      <style>{`
        @keyframes fadeInTopImg {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          from { transform: translateY(0); }
          to { transform: translateY(-32px); }
        }
      `}</style>
    </Container>
  );
}

export default About;
