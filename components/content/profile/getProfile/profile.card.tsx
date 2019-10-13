import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { IProfile } from '../../../../lib/models/profile.model';
import { IUser } from '../../../../lib/models/user.model';
import { ProfileAvatar } from './profile.avatar';
import { ProfileExperience } from './profile.experience';
import { ProfileName } from './profile.name';
import { ProfileSkills } from './profile.skills';
import { ProfileTitle } from './profile.title';

function ProfileRating(props: { profile: IProfile }) {
  return <Typography>Rating: {props.profile.rating}</Typography>;
}

export function ProfileCard(props: { profile: IProfile; user: IUser }) {
  return (
    <Grid container>
      <Grid item xs={2}>
        <ProfileAvatar profile={props.profile} />
      </Grid>
      <Grid item xs={10}>
        <ProfileName user={props.user} />
        <ProfileTitle profile={props.profile} />
      </Grid>
      <Grid item>
        <ProfileRating profile={props.profile} />
      </Grid>
      <Grid item>
        <ProfileSkills
          profile={props.profile}
          renderSkill={skill => (
            <Typography variant='body2'>{skill}</Typography>
          )}
        />
      </Grid>
      <Grid item>
        <ProfileExperience
          profile={props.profile}
          renderExperience={experience => (
            <Typography variant='body2'>{experience}</Typography>
          )}
        />
      </Grid>
    </Grid>
  );
}
