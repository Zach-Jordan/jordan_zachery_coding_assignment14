import React from "react";
import { Label, Text, Card1, Card2, Img } from "zlj-comp-lib";
import taskk9 from "../assets/img/taskk9.PNG";
import kylepeters from "../assets/img/kylepeters.PNG";

const Work = () => {
  return (
    <div className="container">
      <Label text="Work" />

      <Card1
        image={<Img src={taskk9} alt="Image" height="325px" width="325px" />}
      >
        <h2>
          <a href="https://github.com/Zach-Jordan/taskk9_react">Task K9</a>
        </h2>
        <Text>
          Task K9 is media site for all things working dogs. It is a content
          management system, CRUD application that allows users to view, upload,
          edit, and delete data on the server side using a custom API.
        </Text>
        <h3>Tech Stack</h3>
        <ul>
          <li>React.js</li>
          <li>PHP</li>
        </ul>
      </Card1>
      <Card1 image={<Img src={kylepeters} alt="Image" width="325px" />}>
        <h2>
          <a href="https://github.com/Zach-Jordan/Kyle-Peters">Kyle Peters</a>
        </h2>
        <Text>
          Kyle Peters is mock client that needed a portfolio done for their
          freelance work. This site uses basic HTML, CSS, and JavaScript to make
          a functioning portfolio with hcontact functionality.
        </Text>
        <h3>Tech Stack</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
      </Card1>
    </div>
  );
};

export default Work;
