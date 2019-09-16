import React from "react";
import DashBoardheader from "../components/Dashboard-header";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider
} from "@material-ui/core";

function DashBoard(): JSX.Element {
  return (
    <div>
      <DashBoardheader></DashBoardheader>
      <section>
        <div className="section-items">
          <ul>
            <li>
              <a href="Post_project">Post a project</a>
            </li>
            <li>
              <a href="Jobs">Bid on a project</a>
            </li>
          </ul>
        </div>
      </section>
      <div className="task-list">
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  style={{
                    color: "#FFF",
                    fontSize: 15,
                    fontFamily: "normal",
                    textAlign: "center"
                  }}
                >
                  Delivered Webdevelopment <br></br> artifacts iteration 5
                </Typography>
              }
              secondary={
                <Typography
                  style={{
                    color: "#A7A7A7",
                    fontSize: 10,
                    textAlign: "center",
                    marginTop: 12
                  }}
                >
                  Duis laboris cupidatat laboris aliquip dolore exercitation ex.
                  <br></br>
                  Minim fugiat irure incididunt cillum<br></br> officia dolor
                  ullamco laboris cupidatat.
                </Typography>
              }
            ></ListItemText>
          </ListItem>
          <Divider
            variant="inset"
            component="li"
            style={{
              maxWidth: 360,
              background: "#666666"
            }}
          />
        </List>
      </div>

      <style jsx>{`
        .section-items {
          margin-top: 30px;
          margin-left: 65px !important;
        }
        .section-items a {
          text-decoration: none;
          color: #fff;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 13px;
          line-height: 12px;
          align-items: center;
        }
        .section-items li {
          list-style-type: none;
          margin-top: 20px;
        }
        .task-list {
          border: 1px solid #000;
          width: 500px;
          margin-left: auto;
          margin-right: auto;
          margin-top: -70px;
        }
      `}</style>
    </div>
  );
}

export default DashBoard;
