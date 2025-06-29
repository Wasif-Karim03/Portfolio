import React from "react";
import Card from "react-bootstrap/Card";

const sectionTitleStyle = {
  color: "#c770f0",
  fontWeight: 900,
  fontSize: "1.7rem",
  marginBottom: 18,
  letterSpacing: 1,
  textAlign: "left",
  fontFamily: 'Raleway, sans-serif',
  textShadow: '0 2px 8px rgba(199,112,240,0.08)'
};

const listStyle = { marginBottom: 0, paddingLeft: 24, textAlign: "left", fontSize: "1.08rem" };

const cardStyle = {
  borderRadius: 18,
  boxShadow: "0 8px 32px 0 rgba(199,112,240,0.18)",
  background: "linear-gradient(135deg,rgba(40,30,60,0.98) 60%,rgba(199,112,240,0.08) 100%)",
  border: "none",
  marginBottom: 48,
  animation: "fadeInAboutCard 1.2s",
  minHeight: 340,
  flex: 1,
  width: "100%"
};

const accentBarStyle = {
  width: 7,
  borderRadius: 12,
  background: "linear-gradient(180deg,#c770f0 0%,#934cce 100%)",
  boxShadow: "0 0 16px #c770f055",
  minHeight: 120
};

const sectionRowStyle = (align) => ({
  display: "flex",
  flexDirection: align === "right" ? "row-reverse" : "row",
  alignItems: "stretch",
  justifyContent: align === "right" ? "flex-end" : "flex-start",
  width: "100vw",
  maxWidth: "100vw",
  marginLeft: 0,
  marginRight: 0,
  marginBottom: 48,
  gap: 0,
});

const cardContainerStyle = {
  display: "flex",
  alignItems: "stretch",
  flex: 1,
  width: "100%"
};

function AboutCard() {
  return (
    <div style={{ width: "100vw", maxWidth: "100vw" }}>
      {/* Education Section - Left */}
      <div style={sectionRowStyle("left")}> 
        <div style={cardContainerStyle}>
          <div style={{ ...accentBarStyle }} />
          <Card className="quote-card-view" style={cardStyle}>
            <Card.Body style={{ textAlign: "left", padding: "2.2rem 2.2rem 2.2rem 1.2rem" }}>
              <h3 style={sectionTitleStyle}>Education</h3>
              <ul style={listStyle}>
                <li>
                  <b>Ohio Wesleyan University, Ohio, USA</b><br />
                  <i>Bachelor of Science in Physics & Bachelor of Arts in Computer Science</i><br />
                  Anticipated Graduation: May 2026<br />
                  Honors: Schubert Scholarship, Art Scholarship, Honors Student, Cambridge A-Level Scholar
                </li>
                <li>
                  <b>Ideal School and College, Dhaka, Bangladesh</b>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Hobbies Section - Right */}
      <div style={sectionRowStyle("right")}> 
        <div style={cardContainerStyle}>
          <div style={{ ...accentBarStyle }} />
          <Card className="quote-card-view" style={cardStyle}>
            <Card.Body style={{ textAlign: "left", padding: "2.2rem 2.2rem 2.2rem 1.2rem" }}>
              <h3 style={sectionTitleStyle}>Hobbies & Personal Interests</h3>
              <ul style={listStyle}>
                <li>Watching robotics and AI documentaries</li>
                <li>Tinkering with Arduino, Raspberry Pi, and small electronics</li>
                <li>Playing and analyzing chess</li>
                <li>Exploring new web technologies and side projects</li>
                <li>Stargazing and learning about astrophysics</li>
                <li>Listening to instrumental or lo-fi music while coding</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Movies Section - Left */}
      <div style={sectionRowStyle("left")}> 
        <div style={cardContainerStyle}>
          <div style={{ ...accentBarStyle }} />
          <Card className="quote-card-view" style={cardStyle}>
            <Card.Body style={{ textAlign: "left", padding: "2.2rem 2.2rem 2.2rem 1.2rem", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
              <h3 style={sectionTitleStyle}>Favorite Movies & Series</h3>
              <ul style={{ ...listStyle, fontStyle: "italic" }}>
                <li>The Imitation Game</li>
                <li>Interstellar</li>
                <li>The Social Network</li>
                <li>Mr. Robot</li>
                <li>Love, Death & Robots</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Quotes Section - Right */}
      <div style={sectionRowStyle("right")}> 
        <div style={cardContainerStyle}>
          <div style={{ ...accentBarStyle }} />
          <Card className="quote-card-view" style={cardStyle}>
            <Card.Body style={{ textAlign: "left", padding: "2.2rem 2.2rem 2.2rem 1.2rem" }}>
              <h3 style={sectionTitleStyle}>Favorite Quotes</h3>
              <ul style={{ ...listStyle, fontStyle: "italic" }}>
                <li>"Stay hungry, stay foolish." — Steve Jobs</li>
                <li>"Any sufficiently advanced technology is indistinguishable from magic." — Arthur C. Clarke</li>
                <li>"You don't learn to walk by following rules. You learn by doing, and by falling over." — Richard Branson</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes fadeInAboutCard {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
        @media (max-width: 900px) {
          .about-section-card-row { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}

export default AboutCard;
