import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";
import React from "react";

function Select(props) {
  const { name, label, value, onChange, error = null, options } = props || {};
  return (
    <FormControl {...(error && { error: true })} variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect name={name} value={value} onChange={onChange} label={label}>
        <MenuItem value="">None</MenuItem>
        {options.map((option, index) => {
          return (
            <MenuItem value={option.id} key={option.id}>
              {option.title}
            </MenuItem>
          );
        })}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

export default Select;
