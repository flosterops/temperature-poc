import React, { ReactElement } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  Paper,
  TableBody,
} from "@mui/material";
import { ITemperatureData } from "../../types/temperature-data";

interface IProps {
  rows: ITemperatureData[];
}

const TemperatureTable = ({ rows }: IProps): ReactElement => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Air Temperature (°C)</TableCell>
            <TableCell align="center">Air Humidity (%)</TableCell>
            <TableCell align="center">Drinking water</TableCell>
            <TableCell align="center">Sweat Volume</TableCell>
            <TableCell align="center">Water Loss (%)</TableCell>
            <TableCell align="center">Body Temperature (°C)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: ITemperatureData) => {
            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.airTemperature}</TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.airHumidity}
                </TableCell>
                <TableCell align="center">{row.drinkingWater}</TableCell>
                <TableCell align="center">{row.sweatVolume}</TableCell>
                <TableCell align="center">{row.waterLoss}</TableCell>
                <TableCell align="center">{row.bodyTemperature}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { TemperatureTable };
