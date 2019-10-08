import { FunctionComponent } from "react";
import { TextField } from "@material-ui/core";

const CreateProjectTitle: FunctionComponent = () => {
  return (
    <TextField
      name="title"
      type={"text"}
      label={"Profile Title"}
      fullWidth
    ></TextField>
  );
};

export default CreateProjectTitle;
