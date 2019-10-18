import React from "react";
import { TextField, withStyles, InputAdornment } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Send from "@material-ui/icons/Send";
import { MessageActions } from "../../../lib/actions/message.action";
import { useDispatch } from "react-redux";
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

interface State {
  message: string;
}

export function MessageInputs() {

  const [values, setValues] = React.useState<State>({
    message: ''
  });
  const dispatch = useDispatch();

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const sendEvent = () => {
    if (values) {
      dispatch(MessageActions.sendMessage(values));
    }
  };
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
        onChange={handleChange('message')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onMouseDown={handleMouseDownPassword}
                aria-label="toggle password visibility"
                onClick={sendEvent}
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
