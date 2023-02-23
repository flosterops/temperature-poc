import React, { ReactElement } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

const DrinkingWaterGroup = ({ onChange }: any): ReactElement => {
  return (
    <FormControl onChange={onChange}>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Drinking water
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="yes"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
};

export { DrinkingWaterGroup };
