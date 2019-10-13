import { Typography } from '@material-ui/core';
import React from 'react';
import { IProfile } from '../../../../lib/models/profile.model';
export function ProfileSkills(props: {
  profile: IProfile;
  renderSkill: (skill: string) => any;
}) {
  return (
    <>
      {props.profile.skills.length > 0 ? (
        <>
          <Typography variant='h6'>Skills</Typography>
          <div>{props.profile.skills.map(props.renderSkill)}</div>
        </>
      ) : null}
    </>
  );
}
