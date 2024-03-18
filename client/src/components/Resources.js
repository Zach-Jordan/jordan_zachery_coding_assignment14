import React from "react";
import { Label, Text, Card2, Img } from "zlj-comp-lib";
import redriver from "../assets/img/red-river-logo.png";
import codecademy from "../assets/img/codecademy.png";
import freecodecamp from "../assets/img/freecodecamp.png";

const Resources = () => {
  return (
    <div className="container">
      <Label text="Resources" />
      <Card2 image={<Img src={redriver} alt="Image" width="75px" />}>
        <h2>
          <a href="https://www.rrc.ca/">Red River Polytechnic</a>
        </h2>
        <Text>
          I have attended Red River Polytechnic specializing in Fulls Stack
          Developement. My time at the college tought me about front-end,
          back-end, and the developement lifecycle.
        </Text>
      </Card2>
      <Card2 image={<Img src={codecademy} alt="Image" width="75px" />}>
        <h2>
          <a href="https://www.codecademy.com/">Codecademy</a>
        </h2>
        <Text>
          I use Codecademy' large catalog of cources to supplement my knowledge,
          learn new skills and learn new languages.
        </Text>
      </Card2>
      <Card2 image={<Img src={freecodecamp} alt="Image" width="75px" />}>
        <h2>
          <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
        </h2>
        <Text>
          I use FreeCodeCamp' catalog of free cources to supplement my
          knowledge, learn new skills and learn new languages.
        </Text>
      </Card2>
    </div>
  );
};

export default Resources;
