import React from "react";
import { Button } from "@material-ui/core";
import { fontSize, textAlign } from "@material-ui/system";

const postProjectButton = {
  borderRadius: 0,
  background: "#13A8FE",
  color: "#ffffff",
  width: 222,
  height: 51,
  left: 217,
  marginTop: -100
};

const Textstyle = {
  fontSize: 50,
  width: 350,
  height: 217,
  marginLeft: 217,
  marginTop: 150
};

export default function Main() {
  return (
    <main>
      <p style={Textstyle}>Hire expert freelancers for any job</p>

      <Button variant="contained" style={postProjectButton}>
        Post a project
      </Button>
    </main>
  );
}
