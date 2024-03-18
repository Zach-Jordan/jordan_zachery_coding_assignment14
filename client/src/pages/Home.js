import React from "react";
import "../styles/Home.css";
import Header from "../components/Header";
import Work from "../components/Work";
import SetUp from "../components/SetUp";
import Resources from "../components/Resources";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <Header />
      </div>
      <div className="work">
        <Work />
      </div>
      <div className="setup">
        <SetUp />
      </div>
      <div className="resources">
        <Resources />
      </div>
    </div>
  );
};

export default Home;
