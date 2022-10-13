import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FormHelperText } from "@mui/material";

const RadioComponent = ({
  label = "",
  helperText = "",
  error = false,
  value = "",
  id = "",
  onChange = () => {},
  options = [{ value: "", label: "" }],
}) => {
  return (
    <FormControl error={error}>
      <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        row
        id={id}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={(e) =>
          onChange({ target: { id: id, value: e.target.value } })
        }
      >
        {options.map((o) => (
          <FormControlLabel
            value={o.value}
            control={<Radio />}
            label={o.label}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default RadioComponent;
