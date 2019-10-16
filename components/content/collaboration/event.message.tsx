import { Typography } from '@material-ui/core';
import { IEvent } from '../../../lib/models/event.model';

interface IEventMessage {
  message: string;
}

export const EventMessage = (props: { event: IEvent }) => {
  const message: IEventMessage = JSON.parse(props.event.content);
  return (
    <div>
      <Typography variant='h6' color='primary'>
        {props.event.ownerId}
      </Typography>
      <Typography variant='body1'>{message.message}</Typography>
    </div>
  );
};

export default EventMessage;
