import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    width: "345px"
  },
  addskills: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark
    }
  },
  updatekills: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark
    }
  },
  title: {
    color: theme.palette.primary.main
  }
}));
export function ProfileCard(props: {
  onClickCreate: any;
  title: String;
  createBTNTitle: String;
  onClickUpdate: any;
}) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>{props.title}</Typography>
          <Divider></Divider>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            className={classes.addskills}
            onClick={props.onClickCreate}
          >
            {props.createBTNTitle}
          </Button>
          <Button
            size="small"
            className={classes.updatekills}
            onClick={props.onClickUpdate}
          >
            Update
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
