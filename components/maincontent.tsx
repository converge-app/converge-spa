import React from "react";
import { Button } from "@material-ui/core";

const postProjectButton = {
  borderRadius: 0,
  background: "#13A8FE",
  color: "#ffffff",
  width: 222,
  height: 51,
  left: 240,
  marginTop: -130
};

const Textstyle = {
  fontSize: 50,
  width: 350,
  height: 217,
  marginLeft: 240,
  marginTop: 70
};

export default function Main() {
  return (
    <main>
      <p style={Textstyle}>Hire expert freelancers for any job</p>
      <div className="postProjectBTN">
        <Button variant="contained" style={postProjectButton}>
          Post a project
        </Button>
      </div>

      <style jsx global>{`
        body {
          background-image: url("static/Vector.svg");
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: left bottom;
          background-size: 100%;
        }
      `}</style>
    </main>
  );
}
