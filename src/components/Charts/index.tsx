import React from "react";
import { ITemperatureData } from "../../types/temperature-data";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { Grid } from "@mui/material";

interface IProps {
  row: ITemperatureData;
}

interface IOptions {
  value: number;
  name: string;
  min: number;
  max: number;
  color: string;
}

const getOptions = ({ value, name, min = 0, max, color }: IOptions) => {
  return {
    chart: { type: "column" },
    title: {
      text: name,
    },
    xAxis: { labels: { enabled: false } },
    yAxis: [{ min, max }],
    plotOptions: {
      series: {
        borderRadius: 3,
        pointPadding: 0.1,
        groupPadding: 0.1,
        pointWidth: 55,
      },
    },
    legend: {
      enabled: false,
    },
    series: { data: [{ x: 0, y: value, color, name }] },
  };
};

const Charts = ({ row }: IProps) => {
  return (
    <Grid container spacing={6} display="flex" justifyContent="space-between">
      <Grid item xs={3}>
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions({
            value: row.sweatVolume / 10,
            name: "Sweat Volume (Litres)",
            color: "blue",
            min: 0,
            max: 3,
          })}
        />
      </Grid>
      <Grid item xs={3}>
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions({
            value: row.waterLoss / 10,
            name: "Water Loss (%)",
            color: "red",
            min: 0,
            max: 5,
          })}
        />
      </Grid>
      <Grid item xs={3}>
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions({
            value: row.bodyTemperature,
            name: "Body Temperature (°C)",
            color: "red",
            min: 35,
            max: 42,
          })}
        />
      </Grid>
    </Grid>
  );
};

export { Charts };
