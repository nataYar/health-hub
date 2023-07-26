"use client";

import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userProvider";
import { Stack, TextField, Button, Typography, Paper } from "@mui/material";
import PopupModal from "../../../components/PopupModal";
// import { DataStore } from "@aws-amplify/datastore";
// import { Log } from "../../models";
import { saveGoals } from "../../utils/userFn";
import dayjs from "dayjs";
// import { getLogFn } from "../../utils/userFn";

const Goals = () => {
    const { myUser, userLogs } = useContext(UserContext);
    const [currentDate, setCurrentDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [goals, setGoals] = useState({
        caloriesGoal: null,
        weightGoal: null,
    });
    const [currentCaloriesGoal, setCurrentCaloriesGoal] = useState(null)
    const [currentWeightGoal, selCurrentWeightGoal] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      console.log("currentCaloriesGoal" + currentCaloriesGoal)
      console.log("currentWeightGoal" + currentWeightGoal)
    }, [userLogs]);

    useEffect(() => {
      const lastLoggedWeightGoal = () => {
        for (let i = userLogs.length - 1; i >= 0; i--) {
          const log = userLogs[i];
          if (log.weightGoal !== null ) {
            return log.weightGoal;
          }
        }
        return null; // Return null if all logs have null weights
      };
      const lastW = lastLoggedWeightGoal () 
      lastW ? selCurrentWeightGoal(lastW) : null
    }, [userLogs]);

    useEffect(() => {
      const lastLoggedCaloriesGoal = () => {
        for (let i = userLogs.length - 1; i >= 0; i--) {
          const log = userLogs[i];
          if (log.caloriesGoal !== null ) {
            return log.caloriesGoal;
          }
        }
        return null; // Return null if all logs have null weights
      };
      const lastC = lastLoggedCaloriesGoal() 
      lastC ? setCurrentCaloriesGoal(lastC) : null
    }, [userLogs]);

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const passGoalsData = async () => {
      saveGoals(myUser.id, goals.caloriesGoal, goals.weightGoal, currentDate) 
      setIsModalOpen(true);
      setGoals({
        caloriesGoal: null,
        weightGoal: null,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      goals.caloriesGoal !==  null && goals.weightGoal !==  null 
        ? passGoalsData()
        : alert("Please log weight and date");
    };
  
    const handleGoalChange = (event, type) => {
      switch (type) {
        case 'weight':
          const wVal= parseFloat(event.target.value);
          setGoals((prevEntry) => ({
            ...prevEntry,
            weightGoal: wVal,
          }));
          break;

        case 'calories':
          const cVal= parseFloat(event.target.value);
          setGoals((prevEntry) => ({
            ...prevEntry,
            caloriesGoal: cVal,
          }));
          break;
      
        default:
          break;
      }
      };


    return (
      <Stack
        direction="column"
        alignItems="flex-start"
        height="auto"
        padding="20px"
        borderRadius="20px"
        backgroundColor="white"
        component={Paper}
        sx={{
          width: { xs: "90%", md: "40%" },
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb:"20px",
            textAlign: "center",
          }}
        >
          My current goals
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <TextField
            type="number"
            label="Calories daily"
            value={goals.caloriesGoal == null ? "" : goals.caloriesGoal}
            onChange={(e) => handleGoalChange(e, 'calories')}
            sx={{
              width: "100%",
              mb:"10px"
            }}
          />

          <TextField
            type="number"
            label="Desired weight"
            value={goals.weightGoal == null ? "" : goals.weightGoal}
            onChange={(e) => handleGoalChange(e, 'weight')}
            sx={{
              width: "100%",
              mb:"10px"
            }}
          />
  
          <Button 
          variant="contained" 
          type="submit"
          disabled={!goals.caloriesGoal}
          >
            Log goal
          </Button>
        </form>
        <PopupModal
          text="Goal logged!"
          open={isModalOpen}
          onClose={handleCloseModal}
        />
      </Stack>
    );
  };

export default Goals