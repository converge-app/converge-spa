import React, { useEffect } from "react";
import {
  Box,
  makeStyles,
  List,
  Container,
  Grid,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography,
  ListItemText
} from "@material-ui/core";

import { MessageInputs } from "./message.inputs";
import { useDispatch, useSelector } from "react-redux";
import { ContactActions } from "../../../lib/actions/contacts.actions";
import { services } from "../../../services";
import { IContact } from "../../../lib/models/contact.model";

const useStyles = makeStyles(theme => ({
  box: {
    width: "100%",
    minHeight: 400,
    maxHeight: 600,
    padding: theme.spacing(2, 3),
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#30343C",
    display: "grid",
    gridGap: 40,
    boxShadow: "2px 2px 30px rgba(0,0,0,0.15)"
  },
  list: {
    minHeight: 400,
    maxHeight: 600,
    overflow: "auto"
  },
  inputs: {
    marginTop: theme.spacing(1)
  },
  contacts: {
    maxHeight: 700,
    overflow: "auto"
  }
}));
const ChatContent: React.FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactActions.getContacts(services.authentication.getId()));
    dispatch(ContactActions.setCurrentContact(services.authentication.getId()));
  }, []);

  const contacts: IContact[] = useSelector(
    (state: any) => state.contacts.getContacts.contacts
  );
  console.log(contacts);

  if (contacts) {
    return (
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <List className={classes.contacts}>
              {contacts.map((contact, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>{contact.receiverId}</Avatar>
                    </ListItemAvatar>

                    <ListItemText primary={contact.receiverId}></ListItemText>
                  </ListItem>
                  <Divider></Divider>
                </React.Fragment>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className={classes.box}>
              <List className={classes.list}>
                {contacts.map((contact, index) => (
                  <ListItem key={index}>
                    <Typography>{contact.senderId}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
            <div className={classes.inputs}>
              <MessageInputs></MessageInputs>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return <div>Spinner</div>;
  }
};

export default ChatContent;
