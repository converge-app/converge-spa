import React from "react";
import Header from "../components/Header";
import About from "../components/Aboutcontent";

function AboutPage(): JSX.Element {
  return (
    <div>
      <Header></Header>
      <About
        aboutHeadline={"About"}
        aboutBox={
          "Quis eiusmod aliqua id voluptate excepteur ipsum eu. Adipisicing sit amet ullamco aliquip. In exercitation sint dolore pariatur cillum utdolore. Ut deserunt dolore officia excepteur. Amet excepteur do anim"
        }
      ></About>
    </div>
  );
}

export default AboutPage;
