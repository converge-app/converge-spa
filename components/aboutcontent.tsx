import React from "react";

export default function About() {
  return (
    <main>
      <div>
        <div className="aboutHeadline">
          <a>About</a>
        </div>
        <div className="aboutBox">
          <p>
            Quis eiusmod aliqua id voluptate excepteur ipsum eu. Adipisicing sit
            amet ullamco aliquip. In exercitation sint dolore pariatur cillum ut
            dolore. Ut deserunt dolore officia excepteur. Amet excepteur do anim
            esse ipsum irure sint culpa ipsum mollit fugiat. Esse commodo minim
            in pariatur ad nulla do aliquip consequat eu consectetur proident.
            Irure ut esse ad in labore dolore magna adipisicing. Nostrud
            reprehenderit pariatur occaecat ad et qui pariatur nisi id laboris.
            Ullamco irure exercitation nulla magna aliquip tempor deserunt ea
            qui commodo commodo sint ipsum occaecat. Adipisicing sint elit
            consectetur occaecat Lorem commodo velit nulla sit.
          </p>
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
            padding: 10px;
            width: 35%;
            height: 300px;
            color: #dadada;
          }
        `}</style>
      </div>
    </main>
  );
}
