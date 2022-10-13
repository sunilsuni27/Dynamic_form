import React from "react";
import TextField from "@mui/material/TextField";

const TextBoxComponent = ({
  label = "",
  type = "text",
  multiLine = false,
  rows = 1,
  helperText = "",
  error = false,
  value = "",
  id = "",
  onChange = () => {},
}) => {
  return (
    <>
      <TextField
        id={id}
        label={label}
        value={value}
        helperText={helperText}
        error={error}
        multiline={multiLine}
        rows={rows}
        type={type}
        onChange={onChange}
      />
    </>
  );
};

export default TextBoxComponent;
