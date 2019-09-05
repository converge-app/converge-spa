import React from "react";

const About = props => {
  return (
    <main>
      <div>
        <div className="aboutHeadline">
          <a>{props.aboutHeadline}</a>
        </div>
        <div className="aboutBox">
          <p>{props.aboutBox}</p>
        </div>

        <style jsx>{`
          div {
            margin: 0 auto;
            margin-top: 50px;
          }
          div.aboutHeadline {
            color: #13a8fe;
            font-size: 48px;
            font-weight: bold;
            text-align: center;
          }
          div.aboutBox {
            border: 1px solid;
            width: 35%;
            height: 300px;
            color: #dadada;
          }
        `}</style>
      </div>
    </main>
  );
};

export default About;
