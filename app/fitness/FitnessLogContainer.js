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
  Menu, MenuItem
} from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { UserContext } from "../context/userProvider";
import { useState, useContext } from "react";
import { deleteExerciseFn } from "../utils/userFn";

const FitnessLogContainer = ({ exercises, setExercisesArray }) => {
  const { myUser, updateUser } = useContext(UserContext);
  const [anchorRow, setAnchorRow] = useState(null);


  const handleDeleteItem = (index, date) => {
    console.log(index, date)
      deleteExerciseFn(myUser.id, date)
      setExercisesArray((prevState) => {
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
  
    const settingsRow = (ind, date) => {
      return (
        <TableCell 
        sx={{ width: '10px'}}
        >
          <Tooltip title="Open settings">
           <MoreHorizRoundedIcon 
            sx={{ color: "neutral.500"}}
           onClick={handleOpenRowMenu}
            size="small"/>
          </Tooltip>
  
          <Menu
            sx={{ 
            mt: "23px" }}
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
              <MenuItem sx={{ backgroundColor: "white"}}  onClick={(ind, date) => handleDeleteItem(ind, date)}>
                Delete
              </MenuItem>
          </Menu>
        </TableCell>
      );
    };
  
    return (
      <Box
        sx={{
          width: "100%",
          borderRadius: "20px",
        }}
      >

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
                  <b>Activity</b>
                </TableCell>
                <TableCell>
                  <b>Duration</b>
                </TableCell>
                <TableCell>
                  <b>Date</b>
                </TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              {exercises
                ? exercises.map((el, ind) => (
                      <TableRow key={ind}>
                        <TableCell>{el.exercise}</TableCell>
                        <TableCell>{el.duration}</TableCell>
                        <TableCell>{el.date}</TableCell>
                        {settingsRow(ind, el.date)}
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
  
  export default FitnessLogContainer;

