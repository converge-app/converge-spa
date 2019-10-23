import React from "react";
import { TextField, withStyles, InputAdornment } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Send from "@material-ui/icons/Send";
import { IMessage } from "../../../lib/models/message.model";
import { services } from "../../../services";
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

export function MessageInputs(props: {
  receiverId: string;
  contactId: string;
}) {
  const [value, setValue] = React.useState();
  const dispatch = useDispatch();

  const sendEvent = () => {
    if (value) {
      const message: IMessage = {
        senderId: services.authentication.getId(),
        receiverId: props.receiverId,
        content: value
      };
      dispatch(
        MessageActions.sendMessage(message, value => {
          if (!value) {
            dispatch(MessageActions.getMessages(props.contactId));
          }
        })
      );
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
        onChange={(e: any) => setValue(e.target.value)}
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
