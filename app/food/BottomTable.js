"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Box,
  Menu, MenuItem, Typography
} from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { useEffect, useState } from "react";

const BottomTable = ({ data }) => {
  const [log, setLog] = useState([]);
  const [anchorRow, setAnchorRow] = useState(null);

  useEffect(() => {
   console.log(log)
  }, [log]);


  useEffect(() => {
    if (data) {
      data.ingredients.map((el) => {
        el.parsed.map((ingr) => {
          setLog((prevState) => [
            ...prevState,
            {
              weight: ingr.weight,
              food: ingr.food,
              qty: ingr.quantity,
              unit: ingr.measure,
              calories: Math.round(ingr.nutrients.ENERC_KCAL.quantity),
            },
          ]);
        });
      });
    }
  }, [data]);

  const handleDeleteItem = (index) => {
    console.log('delete')
    setLog((prevState) => {
      const updatedLog = [...prevState];
      updatedLog.splice(index, 1);
      return updatedLog;
    });
    handleCloseRowMenu()
  };


  const handleOpenRowMenu = (event) => {
    setAnchorRow(event.currentTarget);
  };

  const handleCloseRowMenu = () => {
    setAnchorRow(null);
  };

  const settingsRow = (ind) => {
    return (
      <TableCell sx={{ width: '10px'}}>
        <Tooltip title="Open settings">
         <MoreHorizRoundedIcon 
          sx={{ color: "neutral.400"}}
         onClick={handleOpenRowMenu}
          size="small"/>
        </Tooltip>

        <Menu
          sx={{ 
          mt: "45px" }}
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
            <MenuItem sx={{ backgroundColor: "white"}}  onClick={() => handleDeleteItem(ind)}>
              Delete
            </MenuItem>
        </Menu>
      </TableCell>
    );
  };

  return (
    <Box
      sx={{
        mt: "30px",
        width: "100%",
        borderRadius: "20px",
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5",
      }}
    >
      <TableContainer
        sx={{
          width: "100%",
          borderRadius: "20px",
          backgroundColor: "common.white",
          boxShadow:
            "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5",
          color: "neutral.800",
        }}
      >
        <Table
          sx={{
            backgroundColor: "white",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5",
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
          {/* <Divider/> */}
          
          <TableBody>
            {log
              ? log.map((el, ind) => (
                
                    <TableRow key={ind}>
                      <TableCell>{el.qty}</TableCell>
                      <TableCell>{el.unit}</TableCell>
                      <TableCell>{el.food}</TableCell>
                      <TableCell>{el.calories}</TableCell>
                      <TableCell>{el.weight}</TableCell>
                      {settingsRow(ind)}
                    </TableRow>
                 
                ))
              : 

                null
          }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BottomTable;
