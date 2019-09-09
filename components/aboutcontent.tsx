import React from "react";

const About = props => {
  return (
    <main>
      <div className="aboutWrapper">
        <div className="aboutHeadline">
          <a>{props.aboutHeadline}</a>
        </div>
        <div className="aboutBox">
          <p>{props.aboutBox}</p>
        </div>

        <style jsx>{`
          div.aboutWrapper {
            width: 35%;
            margin-left: auto;
            margin-right: auto;
          }
          div.aboutHeadline {
            color: #13a8fe;
            font-size: 48px;
            font-weight: bold;
          }
          div.aboutBox {
            border: 1px solid;

            height: 300px;
            color: #dadada;
          }
        `}</style>
      </div>
    </main>
  );
};

export default About;
