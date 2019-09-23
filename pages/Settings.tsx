import React from "react";
import DashBoardheader from "../components/Dashboard-header";
import {
  Switch,
  TextField,
  withStyles,
  makeStyles,
  Theme,
  createStyles,
  createMuiTheme
} from "@material-ui/core";
const useStyles = makeStyles({
  indicator: {
    borderBottomColor: "red"
  }
});
function Settings(): JSX.Element {
  const classes = useStyles(2);
  return (
    <main>
      <form>
        <TextField
          className={classes.indicator}
          label="Custom CSS"
          variant="outlined"
          id="custom-css-outlined-input"
        />
      </form>
      <style jsx>{`
        .sa {
        }
      `}</style>
    </main>
  );
}

export default Settings;
