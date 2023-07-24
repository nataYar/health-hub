"use client";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Box
} from "@mui/material";
import { useEffect, useState } from "react";
import DatePickerContainer from "@/components/DatePickerContainer";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "../styles/foodPage.css";

const BottomTable = ({ foodItems, selectedDate, setSelectedDate, handleLogData }) => {
  // const [chosenItems, setChosenItems] = useState(new Set());
  // const [clickedRows, setClickedRows] = useState(new Set());
  // const [anchorRow, setAnchorRow] = useState(null);

  // Function to handle click event on TableRow
  // const handleSelection = (ind) => {
  //   const updatedClickedRows = new Set(clickedRows);
  //   if (updatedClickedRows.has(ind)) {
  //     updatedClickedRows.delete(ind);
  //   } else {
  //     updatedClickedRows.add(ind);
  //   }
  //   setClickedRows(updatedClickedRows);
  // };


  // const handleDeleteItem = (index) => {
  //   setLog((prevState) => {
  //     const updatedLog = [...prevState];
  //     updatedLog.splice(index, 1);
  //     return updatedLog;
  //   });
  // };

  // const handleCloseRowMenu = () => {
  //   setAnchorRow(null);
  // };

  // const handleOpenRowSettings = (event) => {
  //   setAnchorRow(event.currentTarget);
  // };
  // useEffect(() => {
  //   if (foodItems) {
  //     foodItems.ingredients.map((el) => {
  //       el.parsed.map((ingr) => {
  //         setLog((prevState) => [
  //           ...prevState,
  //           {
  //             weight: ingr.weight,
  //             food: ingr.food,
  //             qty: ingr.quantity,
  //             unit: ingr.measure,
  //             calories: Math.round(ingr.nutrients.ENERC_KCAL.quantity),
  //           },
  //         ]);
  //       });
  //     });
  //   }
  // }, [foodItems]);

  const aggToLog = () => {
    handleLogData()
  }



  return (
    <Box
      component={Paper}
      sx={{
        my: "30px",
        width: "100%",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "auto",
          p: "16px",
        }}
      >
        <DatePickerContainer
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          widthMd="160px"
        />
        {/* <Button
          variant="contained"
          sx={{
            width: "auto",
            backgroundColor: "primary.main",
            marginLeft: { xs: "0", md: "8px" },
            marginTop: { xs: "16px", md: "0px" },
          }}
        >
          Log all
        </Button> */}
        <Button
          variant="contained"
          disabled={ foodItems.length==0}
          onClick={aggToLog}
          sx={{
            width: "auto",
            backgroundColor: "primary.main",
            marginLeft: "8px",
            marginTop: { xs: "16px", md: "0px" },
          }}
        >
          Log meal
        </Button>
      </Box>

      <TableContainer
        sx={{
          width: "100%",
          borderRadius: "20px",
          backgroundColor: "common.white",
          color: "neutral.800",
        }}
      >
        <Table
          sx={{
            backgroundColor: "white",
          }}
        >
          <TableHead
            sx={{
              backgroundColor: "white",
            }}
          >
            <TableRow
              sx={{
                backgroundColor: "white",
              }}
            >
              <TableCell
                sx={{
                  backgroundColor: "white",
                }}
              >
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
            {foodItems
              ? foodItems.map((el, ind) => (
                  <TableRow
                    // className={
                    //   clickedRows.has(ind)
                    //     ? "tableCell tableCell_selected"
                    //     : "tableCell"
                    // }
                    key={ind}
                    // onClick={() => handleSelection(ind)}
                  >
                    <TableCell>{el.qty}</TableCell>
                    <TableCell>{el.unit}</TableCell>
                    <TableCell>{el.food}</TableCell>
                    <TableCell>{el.calories}</TableCell>
                    <TableCell>{el.weight}</TableCell>
                    {/* <TableCell
                      sx={{
                        borderBottomColor: "none",
                      }}
                      id="tableIcon"
                    >
                      <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Settings">
                          <MoreVertIcon onClick={handleOpenRowSettings} />
                        </Tooltip>
                      </Box>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorRow}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorRow)}
                        onClose={handleCloseRowMenu}
                      >
                        <MenuItem>
                          <Typography textAlign="center">Delete</Typography>
                        </MenuItem>
                      </Menu>
                    </TableCell> */}
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BottomTable;
