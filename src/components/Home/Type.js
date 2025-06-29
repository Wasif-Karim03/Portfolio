import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Aspiring Robotics Engineer",
          "Developing Software Engineer",
          "Budding Data Analyst",
          "AI & Machine Learning Learner",
          "Student Technical Leader",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
