import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

const profileContent: React.FunctionComponent = () => {
  const classes = useStyles();
  console.log(classes);

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={6}>
          profile
        </Grid>
        <Grid item xs={6}>
          Recent activity
        </Grid>
      </Grid>
    </Container>
  );
};

export default profileContent;
