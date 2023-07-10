import React, { useState, useEffect } from "react";
import DatePickerContainer from "../../components/DatePickerContainer";
import { Stack, TextField, Button, Typography } from "@mui/material";
import PopupModal from '../../components/PopupModal'
import dayjs from 'dayjs';

const WeightLogger = () => {
  const [weightEntry, setWeightEntry] = useState({
    weight: "",
    date: { day: "", month: "", year: "" },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

const [selectedDate, setSelectedDate ] = useState(null)

useEffect(()=>{
  selectedDate ? 
  // console.log(selectedDate.format('YYYY-MM-DD'))
  setWeightEntry((prevEntry) => ({
    ...prevEntry,
    date: selectedDate.format('YYYY-MM-DD')
  }))
  : null;
}, [selectedDate])

useEffect(()=>{

  console.log(weightEntry)
 
}, [weightEntry])


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

  // const handleDateChange = (date) => {
  //   setWeightEntry((prevEntry) => ({
  //     ...prevEntry,
  //     date: date
  //   }));
  // };

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

        <DatePickerContainer selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>

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
