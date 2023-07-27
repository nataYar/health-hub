"use client";

import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userProvider";
import { Stack, TextField, Button, Typography, Paper, useTheme } from "@mui/material";
import PopupModal from "../../../components/PopupModal";
import { saveGoals } from "../../utils/userFn";
import dayjs from "dayjs";
import { neutral } from "@/app/theme/colors";


const Goals = () => {
  const theme = useTheme();
  const { myUser, currentCaloriesGoal, currentWeightGoal } = useContext(UserContext);
  const [goals, setGoals] = useState({
    caloriesGoal: null,
    weightGoal: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentDate = dayjs().format("YYYY-MM-DD")
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const passGoalsData = async () => {
    saveGoals(myUser.id, goals.caloriesGoal, goals.weightGoal, currentDate);
    setIsModalOpen(true);
    setGoals({
      caloriesGoal: null,
      weightGoal: null,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    goals.caloriesGoal !== null && goals.weightGoal !== null
      ? passGoalsData()
      : alert("Please log weight and date");
  };

  const handleGoalChange = (event, type) => {
    switch (type) {
      case "weight":
        const wVal = parseFloat(event.target.value);
        setGoals((prevEntry) => ({
          ...prevEntry,
          weightGoal: wVal,
        }));
        break;

      case "calories":
        const cVal = parseFloat(event.target.value);
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
    <>
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
          mb: "20px",
        }}
      >
        <Typography
          variant="h5" gutterBottom
          sx={{ mb: "20px", textAlign: "center" }}
        >
          My current goals
        </Typography>
        {currentCaloriesGoal ? (
          <Typography variant="subtitle1" sx={{ color: neutral[600] }}>
             <span style={{ color: theme.palette.primary.main, fontSize:"20px" }}>{currentCaloriesGoal}</span> calories
          </Typography>
        ) : null}
        {currentWeightGoal ? (
          <Typography variant="subtitle1" sx={{ color: neutral[600] }}>
            <span style={{ color: theme.palette.primary.main, fontSize:"20px"  }}>{currentWeightGoal} </span>weight
          </Typography>
        ) : null}

        <PopupModal
          text="Goal logged!"
          open={isModalOpen}
          onClose={handleCloseModal}
        />
      </Stack>

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
        variant="h5" gutterBottom
        sx={{ mb:"20px",
          textAlign: "center",
        }}
      >
        Log new goals
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
            onChange={(e) => handleGoalChange(e, "calories")}
            sx={{
              width: "100%",
              mb: "10px",
            }}
          />

          <TextField
            type="number"
            label="Desired weight"
            value={goals.weightGoal == null ? "" : goals.weightGoal}
            onChange={(e) => handleGoalChange(e, "weight")}
            sx={{
              width: "100%",
              mb: "10px",
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
    </>
  );
};

export default Goals;
