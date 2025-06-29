import React, { useRef, useEffect, useState } from "react";
import avatarSvg from "../../Assets/avatar.svg";

const experiences = [
  {
    company: "Hilton | Harrison Group",
    role: "Software Engineering Intern",
    date: "May 2025 - August 2025"
  },
  {
    company: "Alumni Office | Ohio Wesleyan University",
    role: "Alumni Relations and System Development Intern",
    date: "August 2024 - Present"
  },
  {
    company: "Hilton | Harrison Group",
    role: "Software Development Intern",
    date: "May 2024 - August 2024"
  },
  {
    company: "Career Connection Office | Ohio Wesleyan University",
    role: "Stap and Web Development Intern",
    date: "August 2023 - August 2024"
  },
  {
    company: "Leland | Stanford, California | Remote",
    role: "Backend Development Intern",
    date: "May 2023 - August 2023"
  }
];

function Experiences() {
  const timelineRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [avatarY, setAvatarY] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [inView, setInView] = useState(Array(experiences.length).fill(false));

  // Layout constants
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 700;
  const timelineWidth = isMobile ? '98vw' : '80vw';
  const cardWidth = isMobile ? '90vw' : '38vw';
  const timelineCenter = isMobile ? 48 : 0.5; // px or percent
  const avatarSize = isMobile ? 48 : 64;
  const cardSpacing = isMobile ? 220 : 240;
  const topPadding = 80;

  // Scroll: determine which card is most in view and update avatar position
  useEffect(() => {
    const handleScroll = () => {
      let found = 0;
      cardRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            found = idx;
          }
        }
      });
      setActiveIdx(found);
      // Calculate avatarY relative to timeline container
      if (timelineRef.current && cardRefs.current[found]) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const avatarCenterAbs = cardRefs.current[found].getBoundingClientRect().top + cardRefs.current[found].getBoundingClientRect().height / 2 + window.scrollY;
        const timelineTopAbs = timelineRect.top + window.scrollY;
        setAvatarY(avatarCenterAbs - timelineTopAbs);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set timeline line height to end at the center of the last card
  useEffect(() => {
    if (timelineRef.current && cardRefs.current[experiences.length - 1]) {
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const lastCardRect = cardRefs.current[experiences.length - 1].getBoundingClientRect();
      const timelineTopAbs = timelineRect.top + window.scrollY;
      const lastCardCenterAbs = lastCardRect.top + lastCardRect.height / 2 + window.scrollY;
      setLineHeight(lastCardCenterAbs - timelineTopAbs);
    }
  }, [avatarY]);

  // Intersection Observer for fade-in
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'));
            setInView((prev) => {
              const arr = [...prev];
              arr[idx] = true;
              return arr;
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  // Calculate timeline container height
  const minHeight = topPadding + (experiences.length - 1) * cardSpacing + 300;

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1333 60%, #c770f022 100%)', paddingTop: 64, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#c770f0', fontWeight: 800, fontSize: '2.8rem', letterSpacing: 1, textShadow: '0 2px 16px #c770f055', marginBottom: 40, textAlign: 'center' }}>
        Experiences
      </h1>
      <div ref={timelineRef} style={{
        position: 'relative',
        width: timelineWidth,
        maxWidth: 1100,
        minHeight,
        margin: '0 auto',
        padding: isMobile ? '0 4vw 120px 4vw' : '0 32px 120px 32px',
      }}>
        {/* Timeline vertical line */}
        <div style={{
          position: 'absolute',
          left: isMobile ? timelineCenter : '50%',
          top: 0,
          width: 8,
          height: lineHeight || minHeight,
          borderRadius: 4,
          zIndex: 0,
          background: 'linear-gradient(180deg, #c770f0 0%, #6e44ff 100%)',
          boxShadow: '0 0 32px #c770f055, 0 0 24px #6e44ff33',
          transform: isMobile ? undefined : 'translateX(-50%)',
        }} />
        {/* Animated avatar */}
        <img src={avatarSvg} alt="avatar" style={{
          position: 'absolute',
          left: isMobile ? timelineCenter : '50%',
          top: avatarY,
          width: avatarSize,
          height: avatarSize,
          borderRadius: '50%',
          boxShadow: '0 4px 24px #c770f099',
          background: '#fff',
          transition: 'top 0.4s cubic-bezier(.77,0,.18,1)',
          border: '3px solid #c770f0',
          zIndex: 3,
          transform: isMobile ? `translateX(-${avatarSize/2}px)` : 'translateX(-50%)',
        }} />
        {/* Experience cards, alternating left/right */}
        {experiences.map((exp, idx) => {
          const alignLeft = isMobile ? false : idx % 2 === 0;
          const cardTop = topPadding + idx * cardSpacing;
          return (
            <div
              key={idx}
              data-idx={idx}
              ref={el => cardRefs.current[idx] = el}
              className="exp-card-anim"
              style={{
                position: 'absolute',
                top: cardTop,
                left: isMobile ? '50%' : alignLeft ? 0 : undefined,
                right: isMobile ? undefined : !alignLeft ? 0 : undefined,
                transform: isMobile
                  ? 'translateX(-50%)'
                  : alignLeft
                    ? 'translateY(0)'
                    : 'translateY(0)',
                width: isMobile ? '90vw' : '48%',
                background: 'rgba(40,30,60,0.97)',
                borderRadius: 28,
                boxShadow: alignLeft
                  ? '-8px 0 32px #c770f055, 0 4px 32px #c770f055'
                  : '8px 0 32px #c770f055, 0 4px 32px #c770f055',
                padding: isMobile ? '24px 16px 20px 20px' : '36px 40px 28px 40px',
                borderLeft: alignLeft ? '8px solid #c770f0' : undefined,
                borderRight: !alignLeft ? '8px solid #6e44ff' : undefined,
                color: '#fff',
                opacity: inView[idx] ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(.77,0,.18,1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                marginLeft: isMobile ? 0 : alignLeft ? 0 : '4vw',
                marginRight: isMobile ? 0 : alignLeft ? '4vw' : 0,
              }}
            >
              <div style={{ fontWeight: 800, fontSize: '1.6rem', marginBottom: 2, width: '100%' }}>{exp.company}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: 8, width: '100%' }}>{exp.role}</div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#c770f0', width: '100%', marginTop: 8 }}>
                {exp.date}
              </div>
            </div>
          );
        })}
      </div>
      {/* Campus Involvement Section */}
      <h1 style={{ color: '#c770f0', fontWeight: 800, fontSize: '2.8rem', letterSpacing: 1, textShadow: '0 2px 16px #c770f055', margin: '80px 0 40px 0', textAlign: 'center' }}>
        Campus Involvement
      </h1>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px', color: '#fff' }}>
        {/* Row 1 */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 18 }}>
          <div style={{ fontSize: '1.45rem', fontWeight: 700, flex: 1, minWidth: 220, textAlign: 'left' }}>
            <span style={{ fontWeight: 800 }}>Founding President</span> | Robotics Club | <span style={{ fontStyle: 'italic' }}>Ohio Wesleyan University, USA</span>
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, textAlign: 'left', minWidth: 220, marginLeft: 32 }}>
            December 2022-Present
          </div>
        </div>
        {/* Row 2 */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 18 }}>
          <div style={{ fontSize: '1.45rem', fontWeight: 700, flex: 1, minWidth: 220, textAlign: 'left' }}>
            <span style={{ fontWeight: 800 }}>Mentor</span> (Drone Operations) | Media Center | <span style={{ fontStyle: 'italic' }}>Ohio Wesleyan University, USA</span>
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, textAlign: 'left', minWidth: 220, marginLeft: 32 }}>
            January 2024 – Present
          </div>
        </div>
        {/* Row 3 */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 18 }}>
          <div style={{ fontSize: '1.45rem', fontWeight: 700, flex: 1, minWidth: 220, textAlign: 'left' }}>
            <span style={{ fontWeight: 800 }}>Phi Delta Theta (</span><span style={{ fontWeight: 800, fontFamily: 'serif', fontSize: '1.25em' }}>ΦΔΘ</span><span style={{ fontWeight: 800 }}>)</span> | Former <span style={{ fontStyle: 'italic' }}>Fraternity Secretary</span>
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, textAlign: 'left', minWidth: 220, marginLeft: 32 }}>
            January 2023 - April 2024
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '5rem' }}></div>
    </div>
  );
}

export default Experiences; 