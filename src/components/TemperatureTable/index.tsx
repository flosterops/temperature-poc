import React, { ReactElement } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";

interface IProps {
  rows: any[];
}

const TemperatureTable = ({rows}: IProps): ReactElement => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export { TemperatureTable };
