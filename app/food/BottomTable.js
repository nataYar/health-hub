import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BottomTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Qty</b>
            </TableCell>
            <TableCell>
              <b>Unit</b>
            </TableCell>
            <TableCell>
              <b>Food</b>
            </TableCell>
            <TableCell>
              <b>Calories</b>
            </TableCell>
            <TableCell>
              <b>Weight</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Row 1, Column 1</TableCell>
            <TableCell>Row 1, Column 2</TableCell>
            <TableCell>Row 1, Column 3</TableCell>
            <TableCell>Row 1, Column 4</TableCell>
            <TableCell>Row 1, Column 5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2, Column 1</TableCell>
            <TableCell>Row 2, Column 2</TableCell>
            <TableCell>Row 2, Column 3</TableCell>
            <TableCell>Row 2, Column 4</TableCell>
            <TableCell>Row 2, Column 5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 3, Column 1</TableCell>
            <TableCell>Row 3, Column 2</TableCell>
            <TableCell>Row 3, Column 3</TableCell>
            <TableCell>Row 3, Column 4</TableCell>
            <TableCell>Row 3, Column 5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BottomTable;
