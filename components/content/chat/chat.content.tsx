import React from "react";
import {
  Box,
  makeStyles,
  List,
  Divider,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";

import { MessageInputs } from "./message.inputs";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    display: "grid",
    gridTemplateAreas: `
        'leftside center rightside'
        `,
    gridTemplateColumns: "25% 50% 25%",
    gridGap: 20,
    padding: theme.spacing(8, 20)
  },
  center: {
    gridArea: "center"
  },
  leftSide: {
    gridArea: "leftside"
  },
  box: {
    width: 600,
    minHeight: 450,
    padding: theme.spacing(8, 6),
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#30343C",
    display: "grid",
    gridGap: 40,
    boxShadow: "2px 2px 30px rgba(0,0,0,0.15)"
  },
  inputs: {
    marginTop: theme.spacing(1)
  }
}));
const ChatContent: React.FunctionComponent = () => {
  const classes = useStyles();
  const numbers = [
    "Sameer Ahmad Habibis",
    "Sameer Ahmad Habibi",
    "Sameer Ahmad Habibi",
    "Sameer Ahmad Habibi",
    "Sameer Ahmad Habibi"
  ];
  return (
    <div className={classes.container}>
      <div className={classes.center}>
        <Box className={classes.box}></Box>
        <div className={classes.inputs}>
          <MessageInputs></MessageInputs>
        </div>
      </div>
      <div className={classes.leftSide}>
        {numbers.map(item => (
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>{item}</Avatar>
              </ListItemAvatar>

              <ListItemText primary={item}></ListItemText>
            </ListItem>
            <Divider></Divider>
          </List>
        ))}
      </div>
    </div>
  );
};

export default ChatContent;
