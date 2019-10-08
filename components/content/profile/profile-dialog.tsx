import React from "react";
import {
  DialogContent,
  Dialog,
  TextField,
  DialogActions,
  Button,
  DialogTitle,
  DialogContentText,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  createButton: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark
    }
  },
  cancelButton: {
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark
    }
  },
  text: {
    height: "130px",
    width: "400px"
  }
}));

export function ProfileDialog(props: {
  onClose: any;
  open: any;
  title: String;
  onSaveClick: any;
  onCancelClick: any;
  label: any;
  description: String;
  id: any;
  type: any;
}) {
  const classes = useStyles();

  return (
    <>
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={props.open}
        onClose={props.onClose}
      >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>{props.description}</DialogContentText>
          <TextField
            className={classes.text}
            autoFocus
            id={props.id}
            label={props.label}
            type={props.type}
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.cancelButton}
            onClick={props.onCancelClick}
          >
            Cancel
          </Button>
          <Button
            className={classes.createButton}
            onClick={props.onSaveClick}
            autoFocus
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
