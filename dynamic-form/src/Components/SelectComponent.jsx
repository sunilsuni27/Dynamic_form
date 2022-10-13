import { MenuItem } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

const SelectComponent = ({
  label = "",
  helperText = "",
  error = false,
  value = "",
  id = "",
  onChange = () => {},
  options = [],
}) => {
  return (
    <>
      <FormControl error={error}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id={id}
          value={value}
          label={label}
          onChange={(e) =>
            onChange({ target: { id: id, value: e.target.value } })
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((o) => (
            <MenuItem value={o.value}>{o.label}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
};

export default SelectComponent;
