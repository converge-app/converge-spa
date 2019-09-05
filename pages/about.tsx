import React from "react";
import Header from "../components/header";
import About from "../components/aboutcontent";

function Home(): JSX.Element {
  return (
    <div>
      <Header></Header>
      <About></About>
    </div>
  );
}

export default Home;
