import { Box, makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageActions } from '../../../lib/actions/message.action';
import { IContact } from '../../../lib/models/contact.model';
import { IMessage } from '../../../lib/models/message.model';
import { services } from '../../../services';
import CentralSpinner from '../../styles/utility/spinner.central';
import { MessageInputs } from './message.inputs';
import ReceivingMessage from './receivingMessage';
import SentMessage from './sendMessage';

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
    minHeight: 300,
    maxHeight: 500,
    overflow: 'auto',
    padding: theme.spacing(2, 3),
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#30343C',
    display: 'grid',
    gridGap: 40,
    boxShadow: '2px 2px 30px rgba(0,0,0,0.15)',
  },
  list: {
    minHeight: 300,
    maxHeight: 500,
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

const Chat = (props: { currentContact: IContact }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(props.currentContact);
  const { currentContact } = props;

  useEffect(() => {
    if (currentContact) {
      dispatch(MessageActions.getMessages(currentContact.contactId as string));
    }
  }, [props]);
  const messages: IMessage[] = useSelector(
    (state: any) => state.message.getMessages.msg,
  );

  if (messages && currentContact) {
    return (
      <div>
        <Box className={classes.box}>
          {messages.map((message, index) => (
            <div key={index}>
              {message.senderId !== services.authentication.getId() ? (
                <SentMessage message={message} />
              ) : (
                <ReceivingMessage message={message} />
              )}
            </div>
          ))}
        </Box>
        <div className={classes.inputs}>
          <MessageInputs
            receiverId={
              currentContact.receiverId != services.authentication.getId()
                ? currentContact.receiverId
                : currentContact.senderId
            }
            contactId={currentContact.contactId as string}
          ></MessageInputs>
        </div>
      </div>
    );
  } else {
    return <CentralSpinner></CentralSpinner>;
  }
};
export default Chat;
