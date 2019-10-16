import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CollaborationActions } from '../../../lib/actions/collaboration.actions';
import { IEvent } from '../../../lib/models/event.model';
import EventType from './event.type';

const CollaborationContent = (props: { collaboration: IEvent[] }) => {
  const collaboration = props.collaboration.sort((a, b) => {
    if (
      typeof a.timestamp !== 'undefined' &&
      typeof b.timestamp !== 'undefined'
    ) {
      return a.timestamp - b.timestamp;
    }
    return 0;
  });
  return (
    <Grid container spacing={3}>
      {collaboration.map((event: IEvent, index: number) => {
        if (typeof event.timestamp !== 'undefined') {
          const date = new Date(event.timestamp * 1000);

          return (
            <React.Fragment key={index}>
              <Grid item xs={2}>
                <Typography>
                  {date
                    .toUTCString()
                    .split(' ')
                    .slice(0, 4)
                    .join(' ')}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <EventType event={event}></EventType>
              </Grid>
            </React.Fragment>
          );
        }
      })}
      <Grid item xs={12}>
        <CreateEvent projectId={collaboration[0].projectId}></CreateEvent>
      </Grid>
    </Grid>
  );
};

export default CollaborationContent;

export const CreateEvent = (props: { projectId: string }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = React.useState('');

  const sendEvent = () => {
    if (message) {
      dispatch(CollaborationActions.send(message, props.projectId, 'message'));
    }
  };
  return (
    <div>
      <TextField
        label='Message'
        value={message}
        fullWidth
        rows={6}
        multiline
        onChange={(e) => setMessage(e.target.value)}
      ></TextField>
      <br />
      <Button onClick={() => sendEvent()} variant='contained' color='primary'>
        Send
      </Button>
    </div>
  );
};
