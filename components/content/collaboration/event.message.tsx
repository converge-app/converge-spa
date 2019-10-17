import { Typography } from '@material-ui/core';
import { IEvent } from '../../../lib/models/event.model';
import { IUser } from '../../../lib/models/user.model';
import React, { useEffect } from 'react';
import { UserService } from '../../../services/user.service';

interface IEventMessage {
  message: string;
}

export const EventMessage = (props: { event: IEvent }) => {
  const message: IEventMessage = JSON.parse(props.event.content);

  const [user, setUser] = React.useState<IUser>();

  const getUser = (userId: string) => {
    UserService.getByUserId(userId).then((value) => {
      setUser(value);
    });
  };

  useEffect(() => {
    getUser(props.event.ownerId);
  }, []);

  if (user) {
    return (
      <div>
        <Typography variant='h6' color='primary'>
          {user.firstName + ' ' + user.lastName}
        </Typography>
        <Typography variant='body1'>{message.message}</Typography>
      </div>
    );
  } else {
    return <div>spinner</div>;
  }
};

export default EventMessage;
