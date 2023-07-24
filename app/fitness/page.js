"use client";
import { useEffect, useState, useContext, useCallback } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DataPickerContainer from "../../components/DatePickerContainer";
import FitnessLogContainer from "./FitnessLogContainer";
import { exercisesData } from "./exercisesData";
import { createExerciseFn } from "../utils/userFn";
import { UserContext } from "../context/userProvider";
import { DataStore, SortDirection } from "@aws-amplify/datastore";
import { Exercise } from "../models";
import dayjs from "dayjs";

const LogExercise = () => {
  const { myUser, updateUser } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [exercise, setExercise] = useState("");
  const [customExercise, setCustomExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [exercisesArray, setExercisesArray] = useState([]);

  useEffect(()=> {
    console.log(exercisesArray)
  }, exercisesArray)

  p => p.and(p => [
    p.title.beginsWith("post"),
    p.rating.gt(10)
  ]), {
    sort: s => s.date(SortDirection.ASCENDING)
  }


  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const initialExercises = await DataStore.query(
          Exercise,
        p => p.and(p => [
          p.userID.eq(myUser.id)
        ]), 
        {
          sort: s => s.date(SortDirection.ASCENDING)
        }
        )
        console.log(initialExercises);
        setExercisesArray(initialExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };
  
    fetchExercises();
    const subscription = DataStore.observe(Exercise).subscribe((msg) => {
      if (!msg || !msg.element) {
        return;
      }
  
      const updatedExercise = msg.element;
      setExercisesArray((prevExercisesArray) => {
        // Find the index of the updated exercise in the array
        const index = prevExercisesArray.findIndex(
          (exercise) => exercise.id === updatedExercise.id
        );
  
        // Create a new array with the updated exercise
        const updatedArray = [...prevExercisesArray];
        if (index !== -1) {
          updatedArray[index] = updatedExercise;
        } else {
          // If it's a new exercise, add it to the array
          updatedArray.push(updatedExercise);
        }
  
        // Sort the updatedArray by date
        updatedArray.sort((a, b) => a.date.localeCompare(b.date));
  
        return updatedArray;
      });
    });
  
    return () => subscription.unsubscribe();

    }, [])
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const subscription = await DataStore.observeQuery( 
  //       Exercise, exercise => exercise.userID.eq(myUser.id)
  //       )
  //       .subscribe(snapshot => {
  //           if (!snapshot || !snapshot.models) {
  //             return; // Return if snapshot or models is undefined or null
  //           }
  //           console.log(snapshot)
  //           const modelsArray = Object.values(snapshot.models);
  //           console.log(modelsArray)
  //           setExercisesArray((prevExercisesArray) => [...prevExercisesArray, ...modelsArray]);
  //         })
  //   }
  //  fetchData()
  // }, []);


  //   useEffect(() => {
  //     const fetchExercises = async () => {
  //       try {
  //         const initialExercises = await DataStore.query(Exercise, (exercise) =>
  //           exercise.userID.eq(myUser.id)
  //         );
  //         setExercisesArray(initialExercises);
  
  //         // Subscribe for real-time updates
  //         const subscription = DataStore.observe(Exercise).subscribe((msg) => {
  //           if (msg.opType === "UPDATE") {
  //             setExercisesArray((prevExercisesArray) =>
  //               prevExercisesArray.map((exercise) =>
  //                 exercise.id === msg.element.id ? msg.element : exercise
  //               )
  //             );
  //           } else if (msg.opType === "DELETE") {
  //             setExercisesArray((prevExercisesArray) =>
  //               prevExercisesArray.filter((exercise) => exercise.id !== msg.element.id)
  //             );
  //           }
  //         });
  
  //         return () => subscription.unsubscribe();
  //       } catch (error) {
  //         console.error("Error fetching exercises:", error);
  //       }
  //     };
  
  //     fetchExercises();

  // }, []);


  const handleLogExercise = () => {
    const ex = exercise !== "Custom" ? exercise : customExercise;
    console.log(myUser.id, ex, duration, selectedDate.format("YYYY-MM-DD"))
    createExerciseFn(myUser.id, ex, duration, selectedDate.format("YYYY-MM-DD"))
    // const el = {
    //   exercise: ex,
    //   duration: duration,
    //   date: selectedDate.format("YYYY-MM-DD"),
    // };
    // setExercisesArray((prevExercisesArray) => [...prevExercisesArray, el]);
    clearInput(); // Clear input fields after logging exercise
  };

  const clearInput = () => {
    setSelectedDate(dayjs());
    setCustomExercise("");
    setExercise("");
    setDuration("");
  };

  const handleExerciseChange = (event) => {
    const value = event.target.value;
    setExercise(value);
  };

  const handleCustomExerciseChange = (event) => {
    setCustomExercise(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <>
      <Box
        component={Paper}
        sx={{
          width: "70%",
          mb: "15px",
          mx:"auto",
          p: "32px 24px",
          color: "neutral.800",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Log Exercise
        </Typography>

        <Box
          sx={{
            mt: "15px",
            gap: "15px",
            width: "auto",
            display: "flex",
            direction: { xs: "column", md: "row" },
            flexWrap: "wrap",
            alignItems: { xs: "center" },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <FormControl
            sx={{ width: { xs: "100%", md: "200px" }, borderRadius: "20px" }}
          >
            <InputLabel id="exercise-label" sx={{ pt: "10px" }}>
              Exercise
            </InputLabel>
            <Select
              sx={{ borderRadius: "20px", p: "10px" }}
              labelId="exercise-label"
              value={exercise}
              onChange={handleExerciseChange}
            >
              {exercisesData.map((exerciseOption) => (
                <MenuItem key={exerciseOption} value={exerciseOption}>
                  {exerciseOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {exercise === "Custom" ? (
            <TextField
              label="Add custom exercise"
              value={customExercise}
              onChange={handleCustomExerciseChange}
              sx={{ width: { xs: "100%", md: "200px" } }}
            />
          ) : null}

          <TextField
            type="number" 
            label="Duration in min"
            value={duration}
            inputProps={{
              inputMode: "numeric", // Set input mode to numeric
              pattern: "[0-9]*", // Only allow numeric input
              step: "1", // Only allow integer values
            }}
            onChange={handleDurationChange}
            autoComplete="false"
            sx={{
              width: { xs: "100%", md: "150px" },
              mx: { xs: "0px", md: "25px" },
            }}
          />
          <DataPickerContainer
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            widthMd='150px'
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogExercise}
          disabled={!selectedDate || !exercise || !duration}
          sx={{ width: "100px", height: "auto", mt: "15px" }}
        >
          Add
        </Button>
      </Box>

      <Box
        component={Paper}
        sx={{
          width: "70%",
          mb: "15px",
          mx:"auto",
          p: "32px 24px",
          color: "neutral.800",
          borderRadius: "20px",
        }}
      >
        <FitnessLogContainer 
        exercises={exercisesArray} 
        setExercisesArray={setExercisesArray} />
      </Box>
    </>
  );
};

export default LogExercise;
