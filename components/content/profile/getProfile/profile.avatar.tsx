import { Avatar } from '@material-ui/core';
import React from 'react';
import { IProfile } from '../../../../lib/models/profile.model';

export function ProfileAvatar(props: { profile: IProfile }) {
  return <Avatar alt='profile picture' src={props.profile.profilePictureUrl} />;
}
