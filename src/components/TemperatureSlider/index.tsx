import React, { ReactElement, useCallback } from "react";
import { Slider, Box } from "@mui/material";
import { Mark } from "@mui/base/SliderUnstyled/useSlider.types";

const options: Mark[] = [
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 25,
    label: "25°C",
  },
  {
    value: 30,
    label: "30°C",
  },
  {
    value: 35,
    label: "35°C",
  },
  {
    value: 40,
    label: "40°C",
  },
];

interface IProps {
  markType?: string;
  marks?: Mark[];
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

const TemperatureSlider = ({
  markType = "°C",
  marks = options,
  defaultValue,
  step,
  min,
  max,
  onChange,
}: IProps): ReactElement => {
  const getAriaValueText = (value: number) => `${value}${markType}`;
  const handleChange = useCallback(
    (e: any, value: number, activeThumb: number) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={20}
        getAriaValueText={getAriaValueText}
        step={5}
        marks={marks}
        min={20}
        max={40}
        valueLabelDisplay="on"
        onChange={handleChange as any}
      />
    </Box>
  );
};

export { TemperatureSlider };
