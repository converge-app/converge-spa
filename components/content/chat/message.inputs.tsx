import React from "react";
import { TextField, withStyles, InputAdornment } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Send from "@material-ui/icons/Send";
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#13A8FE"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#13A8FE"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: 2
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#30343C"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#13A8FE"
      },
      height: 80
    }
  }
})(TextField);

export function MessageInputs(this: any) {
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <CssTextField
        variant="outlined"
        name="message"
        type="message"
        label="Type a message"
        fullWidth
        multiline
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onMouseDown={handleMouseDownPassword}
                aria-label="toggle password visibility"
              >
                <Send color="primary"></Send>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </>
  );
}
