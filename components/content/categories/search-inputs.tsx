import React from "react";
import { Input} from "@material-ui/core";

export function SearchInputs(props: { onChange: any }) {
  return (
    <>
      <Input
        name="search"
        type="search"
        placeholder="Search categories"
        inputProps={{
          "aria-label": "description"
        }}
        onChange={props.onChange}
      />
    </>
  );
}

export default SearchInputs;
