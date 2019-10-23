import { Typography } from '@material-ui/core';
import React from 'react';
import { IUser } from '../../../../lib/models/user.model';
export function ProfileName(props: { user: IUser }) {
  return (
    <Typography variant='h5'>{`${props.user.firstName} ${props.user.lastName}`}</Typography>
  );
}
