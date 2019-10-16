import { Typography } from '@material-ui/core';
import React from 'react';
import { IProfile } from '../../../../lib/models/profile.model';
export function ProfileTitle(props: { profile: IProfile }) {
  return <Typography variant='body1'>{props.profile.title}</Typography>;
}
