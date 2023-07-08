import React, { useState } from "react";
import DatePicker from "./DatePicker";
import { Stack, TextField, Button, Typography } from "@mui/material";
import PopupModal from '../../components/PopupModal'

const WeightLogger = () => {
  const [weightEntry, setWeightEntry] = useState({
    weight: "",
    date: { day: "", month: "", year: "" },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleWeightChange = (event) => {
    const weightValue = event.target.value;
    setWeightEntry((prevEntry) => ({
      ...prevEntry,
      weight: weightValue,
    }));
  };

  const handleDateChange = (num, datePart) => {
    setWeightEntry((prevEntry) => ({
      ...prevEntry,
      date: { ...prevEntry.date, [datePart]: num },
    }));
  };
  const passWeightData = () => {
    console.log(weightEntry);
    setIsModalOpen(true);
    setWeightEntry({
      weight: "",
      date: { day: "", month: "", year: "" },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    weightEntry.weight &&
    weightEntry.date.day &&
    weightEntry.date.month &&
    weightEntry.date.year
      ? passWeightData()
      : alert("Please log weight and date");
  };

  return (
    <Stack
      direction="column"
      height="auto"
      padding="20px"
      borderRadius="20px"
      backgroundColor="white"
      sx={{
        width: {xs: '90%', md:'35%'}
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: "20px",
        }}
      >
        Weight Logger
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="number"
          label="Weight in lb"
          value={weightEntry.weight}
          onChange={handleWeightChange}
          sx={{
            mb: "20px",
          }}
        />
        <DatePicker weightEntry={weightEntry} handleChange={handleDateChange} />

        <Button variant="contained" type="submit">
          Log Weight
        </Button>
      </form>
      <PopupModal
        text="Weight logged!"
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </Stack>
  );
};

export default WeightLogger;
