"use client";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import DatePickerContainer from "@/components/DatePickerContainer";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "../styles/foodPage.css";

const BottomTable = ({ foodItems, selectedDate, setSelectedDate, widthMd }) => {
  const [chosenItems, setChosenItems] = useState(new Set());
  const [clickedRows, setClickedRows] = useState(new Set());

  // Function to handle click event on TableRow
  const handleSelection = (ind) => {
    const updatedClickedRows = new Set(clickedRows);
    if (updatedClickedRows.has(ind)) {
      updatedClickedRows.delete(ind);
    } else {
      updatedClickedRows.add(ind);
    }
    setClickedRows(updatedClickedRows);
  };

  const handleDeleteItem = (index) => {
    setLog((prevState) => {
      const updatedLog = [...prevState];
      updatedLog.splice(index, 1);
      return updatedLog;
    });
  };

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
          <Button
            variant="contained"
            // onClick={clearInput}
            sx={{
              width: "auto",
              backgroundColor: "primary.main",
              marginLeft: {xs:"0", md: "8px"},
              marginTop: {xs:"16px", md: "0px"},
            }}
          >
            Log all
          </Button>
          <Button
            variant="contained"
            // onClick={clearInput}
            sx={{
              width: "auto",
              backgroundColor: "primary.main",
              marginLeft: "8px",
              marginTop: {xs:"16px", md: "0px"},
            }}
          >
            Log selected
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
                    className={
                      clickedRows.has(ind)
                        ? "tableCell tableCell_selected"
                        : "tableCell"
                    }
                    key={ind}
                    onClick={() => handleSelection(ind)}
                  >
                    <TableCell>{el.qty}</TableCell>
                    <TableCell>{el.unit}</TableCell>
                    <TableCell>{el.food}</TableCell>
                    <TableCell>{el.calories}</TableCell>
                    <TableCell>{el.weight}</TableCell>
                    <TableCell
                      sx={{
                        borderBottomColor: "none",
                      }}
                      id="tableIcon"
                      onClick={(ind) => handleDeleteItem(ind)}
                    >
                      <MoreVertIcon />
                    </TableCell>
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
