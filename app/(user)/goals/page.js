"use client";

import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userProvider";
import { Stack, TextField, Button, Typography } from "@mui/material";
import PopupModal from "../../../components/PopupModal";
import { DataStore } from "@aws-amplify/datastore";
import { Log } from "../../models";
import { saveGoals } from "../../utils/userFn";

const Goals = () => {
    const { myUser, updateUser } = useContext(UserContext);
    const [goals, setGoals] = useState({
        caloriesGoal: null,
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const passGoalsData = async () => {
      saveGoals(myUser.id, goals.caloriesGoal) 
      setIsModalOpen(true);
      setGoals({
        caloriesGoal: "",
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      goals.caloriesGoal !==  null
        ? passGoalsData()
        : alert("Please log weight and date");
    };
  
    const handleGoalChange = (event) => {
        const value = parseFloat(event.target.value);
        setGoals((prevEntry) => ({
          ...prevEntry,
          caloriesGoal: value,
        }));
      };


      useEffect(() => {
        const fetchData = async () => {
          try {
            const log = await DataStore.query(Log, el => el.userID.eq(myUser.id));
            // const userLog = log.filter(el => el.userID === myUser.id)
            console.log(log)
            // setGoals({ caloriesGoal: userLog.caloriesGoal });
          } catch (error) {
            console.error("Error fetching exercises:", error);
          }
        };
        fetchData();
        // const subscription = DataStore.observe(Log).subscribe((el) => {
        //   if (!el || !el.element) {
        //     return;
        //   }
    
        //   const updatedLog= el.element;
        //   console.log(updatedLog)

        //   setGoals({ caloriesGoal: log});
        // });
        // return () => {
        //   subscription.unsubscribe();
        // }
      }, []);

    return (
      <Stack
        direction="column"
        alignItems="flex-start"
        height="auto"
        padding="20px"
        borderRadius="20px"
        backgroundColor="white"
        sx={{
          width: { xs: "90%", md: "35%" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: "20px",
            textAlign: "center",
          }}
        >
          My current goal
          {
            goals.caloriesGoal ?  
           <Typography variant="h2">goals.caloriesGoal </Typography>
            : null
          }
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
            onChange={handleGoalChange}
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