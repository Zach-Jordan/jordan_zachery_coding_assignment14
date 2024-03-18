import React from "react";
import { HeaderCard, Text } from "zlj-comp-lib";

const Header = () => {
  return (
    <div className="container">
      <HeaderCard>
        <h1>Zachery Jordan</h1>
        <h2>Full Stack Web Developer</h2>
        <Text>
          Hi, I am a full-stack web developer based in Canada with 2 years
          expience working primaily working with React.js and Node.js. This is
          my digital gallery where I post my work, passion projects, the things
          I have learned and what I am working towards.
        </Text>

        <h3>Technologies</h3>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>Python</li>
          <li>PHP</li>
          <li>Ruby</li>
          <li>SQL</li>
        </ul>
      </HeaderCard>
    </div>
  );
};

export default Header;
