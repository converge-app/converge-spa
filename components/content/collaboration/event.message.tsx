import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { IEvent } from '../../../lib/models/event.model';
import { IUser } from '../../../lib/models/user.model';
import { UserService } from '../../../services/user.service';
import CentralSpinner from '../../styles/utility/spinner.central';

interface IEventMessage {
  message: string;
}

export const EventMessage = (props: { event: IEvent }) => {
  const message: IEventMessage = JSON.parse(props.event.content);

  const [user, setUser] = React.useState<IUser>();

  const getUser = (userId: string) => {
    UserService.getByUserId(userId).then(value => {
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
        <Typography variant='body1' color='textSecondary'>
          {message.message}
        </Typography>
      </div>
    );
  } else {
    return <CentralSpinner />;
  }
};

export default EventMessage;
