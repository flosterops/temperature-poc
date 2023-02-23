import React, { ReactElement, useCallback, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { TemperatureSlider } from "../TemperatureSlider";
import { DrinkingWaterGroup } from "../DrinkingWaterGroup";

interface IProps {
  onSubmit: (values: {
    airTemperature: number;
    airHumidity: number;
    drinkingWater: string;
  }) => void;
}

const TemperatureForm = ({ onSubmit }: IProps): ReactElement => {
  const [airTemperature, setAirTemperature] = useState<number>(20);
  const [airHumidity, setAirHumidity] = useState<number>(20);
  const [drinkingWater, setDrinkingWater] = useState<string>("yes");

  const handleSubmit = useCallback(() => {
    onSubmit({ airTemperature, airHumidity, drinkingWater });
  }, [airHumidity, airTemperature, drinkingWater, onSubmit]);

  return (
    <Box component="div" sx={{ p: 2 }}>
      <Grid container spacing={6}>
        <Grid item>
          <Box>
            <TemperatureSlider onChange={(value) => setAirTemperature(value)} />
            <TemperatureSlider onChange={(value) => setAirHumidity(value)} />
          </Box>
        </Grid>
        <Grid
          width="100%"
          item
          display="flex"
          alignItems="end"
          justifyContent="space-between"
        >
          <DrinkingWaterGroup
            onChange={(e: any) => setDrinkingWater(e.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Run
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export { TemperatureForm };
