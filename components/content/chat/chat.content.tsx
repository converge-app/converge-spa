import {
  Container,
  Grid,
  List,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactActions } from '../../../lib/actions/contacts.actions';
import { IContact } from '../../../lib/models/contact.model';
import { services } from '../../../services';
import CentralSpinner from '../../styles/utility/spinner.central';
import Chat from './chat';
import Contact from './contact';

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
    minHeight: 400,
    maxHeight: 600,
    padding: theme.spacing(2, 3),
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#30343C',
    display: 'grid',
    gridGap: 40,
    boxShadow: '2px 2px 30px rgba(0,0,0,0.15)',
  },
  list: {
    minHeight: 400,
    maxHeight: 600,
    overflow: 'auto',
  },
  inputs: {
    marginTop: theme.spacing(1),
  },
  contacts: {
    maxHeight: 700,
    overflow: 'auto',
    maxWidth: '100%',
  },
}));

const ChatContent: React.FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentContact, setCurrentContact] = React.useState();

  useEffect(() => {
    dispatch(ContactActions.getContacts(services.authentication.getId()));
  }, []);

  const { contacts, gotContacts } = useSelector(
    (state: any) => state.contacts.getContacts,
  );

  if (gotContacts) {
    if (contacts.length === 0) {
      return (
        <Container maxWidth='xs'>
          <Typography>You don't yet have any contacts</Typography>
        </Container>
      );
    }
    return (
      <Container maxWidth='md'>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <List className={classes.contacts}>
              {(contacts as IContact[]).map((contact, index) => (
                <Contact
                  contact={contact as IContact}
                  index={index}
                  onClick={() => setCurrentContact(contact)}
                />
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={8}>
            <Chat currentContact={currentContact}></Chat>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return <CentralSpinner></CentralSpinner>;
  }
};

export default ChatContent;
