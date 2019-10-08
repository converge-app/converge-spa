import { Avatar, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import CreateProfiletTitle from "./create-profile-Title";
import { ProfileCard } from "./profile-card";
import { ProfileDialog } from "./profile-dialog";

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: "100%",
    display: "grid",
    gridTemplateAreas: `
        'leftside center rightside'
        `,
    gridTemplateColumns: "25% 50% 25%",
    gridGap: 20,
    padding: theme.spacing(8, 20)
  },
  center: {
    gridArea: "center"
  }
}));

const profileContent: React.FunctionComponent = () => {
  const classes = useStyles();
  const [skillsOpen, setSkillsOpen] = React.useState(false);
  const [experienceOpen, setExperienceOpen] = React.useState(false);

  function handleSkillsOpen() {
    setSkillsOpen(true);
  }

  function handleSkillsClose() {
    setSkillsOpen(false);
  }

  function handleExperienceOpen() {
    setExperienceOpen(true);
  }

  function handleExperienceClose() {
    setExperienceOpen(false);
  }

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.center}>
          <Grid container spacing={5} justify="space-between">
            <Grid item xs={12}>
              <Avatar></Avatar>
            </Grid>
            <Grid item xs={6}>
              <CreateProfiletTitle></CreateProfiletTitle>
            </Grid>
            <Grid item xs={6}>
              <ProfileCard
                onClickCreate={handleSkillsOpen}
                onClickUpdate={handleSkillsOpen}
                title={"Skills"}
                createBTNTitle={"Add Skills"}
              ></ProfileCard>
            </Grid>
            <Grid item xs={12}>
              <ProfileCard
                onClickCreate={handleExperienceOpen}
                onClickUpdate={handleExperienceOpen}
                title={"Experience"}
                createBTNTitle={"Add Skills"}
              ></ProfileCard>
            </Grid>
          </Grid>
        </div>
        <div>
          <ProfileDialog
            open={skillsOpen}
            onClose={handleSkillsClose}
            title={"skills"}
            onSaveClick={handleSkillsClose}
            onCancelClick={handleSkillsClose}
            label={"Skills"}
            id={"skills"}
            type={"skills"}
            description={"Write yours skills!"}
          ></ProfileDialog>
        </div>

        <div>
          <ProfileDialog
            open={experienceOpen}
            onClose={handleExperienceClose}
            title={"Experience"}
            onSaveClick={handleExperienceClose}
            onCancelClick={handleExperienceClose}
            label={"Experience"}
            id={"Experience"}
            type={"Experience"}
            description={"Write yours Experience!"}
          ></ProfileDialog>
        </div>
      </div>
    </Container>
  );
};

export default profileContent;
