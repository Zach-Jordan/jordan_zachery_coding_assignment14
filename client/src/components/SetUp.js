import React from "react";
import { Label, Card1 } from "zlj-comp-lib";

const SetUp = () => {
  return (
    <div className="container">
      <Label text="SetUp" />
      <Card1>
        <h2>My VSCode</h2>
        <h3>Extensions</h3>
        <ul>
          <li>Prettier</li>
          <li>Tarbine</li>
          <li>Git CodeSpaces</li>
          <li>Docker</li>
        </ul>
        <h3>Settings</h3>
        <ul>
          <li>Dracula Theme</li>
          <li>Monospace Font</li>
        </ul>
        <h3>Terminal</h3>
        <ul>
          <li>PowerShell</li>
          <li>Bash</li>
          <li>WSL</li>
          <li>Monospace Font</li>
        </ul>
      </Card1>
    </div>
  );
};

export default SetUp;
