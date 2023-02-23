import React, { useState } from "react";
import "./App.css";
import { TemperatureForm } from "./components/TemperatureForm";
import { ITemperatureData } from "./types/temperature-data";
import { v4 as uuid } from "uuid";
import { TemperatureTable } from "./components/TemperatureTable";
import { Container, Grid, Paper } from "@mui/material";
import { Charts } from "./components/Charts";

function App() {
  const [rows, setRows] = useState<ITemperatureData[]>(
    [] as ITemperatureData[]
  );

  const onSubmit = (values: {
    airTemperature: number;
    airHumidity: number;
    drinkingWater: string;
  }) => {
    setRows((prev) => [
      ...prev,
      {
        ...values,
        waterLoss: 10,
        bodyTemperature: 37,
        sweatVolume: 20,
        id: uuid(),
      },
    ]);
  };

  return (
    <Grid container spacing={3} sx={{ p: 4 }}>
      <Grid item xs={12}>
        <Charts row={rows[0] ?? {}} />
      </Grid>
      <Grid item xs={4}>
        <Paper sx={{ p: 2 }}>
          <TemperatureForm onSubmit={onSubmit} />
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>
          <TemperatureTable rows={rows}></TemperatureTable>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
