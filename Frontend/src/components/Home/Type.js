import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine learning",
          "Full Stack Developer",
          "Java Programming",
          "Figma",
          "Deep learning",
          "Python Programming",
          "SQL",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
