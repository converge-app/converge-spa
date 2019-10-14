import { Typography } from "@material-ui/core";
import React from "react";
import { IProfile } from "../../../../lib/models/profile.model";
export function ProfileExperience(props: {
  profile: IProfile;
  renderExperience: (experience: string, index: number) => any;
}) {
  return (
    <>
      {props.profile.experience.length > 0 ? (
        <>
          <Typography variant="h6">Experiences</Typography>
          <div>{props.profile.experience.map(props.renderExperience)}</div>
        </>
      ) : null}
    </>
  );
}
