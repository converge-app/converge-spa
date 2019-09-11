import React from "react";

const Aboutcomponent = props => {
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
            width: 500px;
            margin-left: auto;
            margin-right: auto;
          }
          div.aboutHeadline {
            color: #13a8fe;
            font-size: 48px;
            font-weight: bold;
          }
          div.aboutBox {
            border: 1px solid #dadada;
            height: 300px;
          }
        `}</style>
      </div>
    </main>
  );
};

export default Aboutcomponent;
