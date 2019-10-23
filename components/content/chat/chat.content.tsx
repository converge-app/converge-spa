import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactActions } from "../../../lib/actions/contacts.actions";
import { services } from "../../../services";
import CentralSpinner from "../../styles/utility/spinner.central";
import { IContact } from "../../../lib/models/contact.model";
import {
  Container,
  Grid,
  makeStyles,
  List,
  Box,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemText
} from "@material-ui/core";
import Spinner from "../../styles/utility/spinner";
import { IMessage } from "../../../lib/models/message.model";
import { MessageInputs } from "./message.inputs";
import { IProfile } from "../../../lib/models/profile.model";
import { IUser } from "../../../lib/models/user.model";
import { UserService } from "../../../services/user.service";
import { ProfileService } from "../../../services/profile.service";
import { AxiosResponse } from "axios";

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
    overflow: "auto",
    maxWidth: "100%"
  }
}));

const Contact = (props: { contact: IContact; index: number }) => {
  const [user, setUser] = React.useState<IUser>();
  const [profile, setProfile] = React.useState<IProfile>();

  useEffect(() => {
    UserService.getByUserId(props.contact.receiverId)
      .then((user: IUser) => {
        setUser(user);
      })
      .catch(err => {
        throw err;
      });

    ProfileService.getByUserId(props.contact.receiverId).then(
      (response: AxiosResponse<IProfile>) => {
        setProfile(response.data);
      }
    );
  }, []);

  if (user && profile) {
    return (
      <React.Fragment key={props.index}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={profile.profilePictureUrl}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${user.firstName} ${user.lastName}`}
          ></ListItemText>
        </ListItem>
        <Divider></Divider>
      </React.Fragment>
    );
  } else {
    return <Spinner></Spinner>;
  }
};

const ChatContent: React.FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactActions.getContacts(services.authentication.getId()));
  }, []);

  const contacts: IContact[] = useSelector(
    (state: any) => state.contacts.getContacts.contacts
  );

  let message: IMessage[];

  const renderMessages = () => {
    if (message) {
      return (
        <Grid item xs={12} md={8}>
          <Box className={classes.box}>
            {message.map((msg, index) => (
              <li key={index}>
                <div>
                  {msg.senderId} {msg.id}
                </div>
                <div>{msg.message}</div>
              </li>
            ))}
          </Box>
          <div className={classes.inputs}>
            <MessageInputs></MessageInputs>
          </div>
        </Grid>
      );
    } else {
      return null;
    }
  };

  if (contacts) {
    return (
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <List className={classes.contacts}>
              {contacts.map((contact, index) => (
                <Contact contact={contact as IContact} index={index} />
              ))}
            </List>
          </Grid>
          {renderMessages()}
        </Grid>
      </Container>
    );
  } else {
    return <CentralSpinner></CentralSpinner>;
  }
};

export default ChatContent;
