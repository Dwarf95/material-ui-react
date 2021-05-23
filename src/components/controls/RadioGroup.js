import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";

function RadioGroupControl(props) {
  const { name, label, value, onChange, items } = props || {};
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row name={name} value={value} onChange={onChange}>
        {items &&
          items.map((item, index) => {
            return (
              <FormControlLabel
                value={item.id}
                control={<Radio />}
                label={item.title}
                key={item.id}
              />
            );
          })}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioGroupControl;
