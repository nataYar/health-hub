'use client'
import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";


import { exercisesData } from './exercisesData';

const LogExercise = () => {
  const [date, setDate] = useState(null);
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [exercisesArray, setExercisesArray] = useState(exercisesData);

  const handleLogExercise = () => {
    // Perform any desired operations with the logged exercise data
    console.log("Date:", date);
    console.log("Exercise:", exercise);
    console.log("Duration:", duration);

    // Clear input fields after logging exercise
    setDate(null);
    setExercise("");
    setDuration("");
  };

  const handleExerciseChange = (event) => {
    setExercise(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const changeDate = (newValue) => { setDate(newValue)}

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Log Exercise
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          
        
          {/* <DatePicker label="Basic date picker" /> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="exercise-label">Exercise</InputLabel>
            <Select
              labelId="exercise-label"
              value={exercise}
              onChange={handleExerciseChange}
            >
              {exercisesArray.map((exerciseOption) => (
                <MenuItem key={exerciseOption} value={exerciseOption}>
                  {exerciseOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Duration"
            value={duration}
            onChange={handleDurationChange}
            fullWidth
          />
        </Grid>
      </Grid>

      {/* <Button
        variant="contained"
        color="primary"
        onClick={handleLogExercise}
        disabled={!date || !exercise || !duration}
        sx={{ mt: 2 }}
      >
        Log Exercise
      </Button> */}
    </Box>
  );
};

export default LogExercise;
