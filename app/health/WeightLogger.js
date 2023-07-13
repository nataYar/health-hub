"use client";

// import { UserContext } from "../context/userProvider";
import React, { useState, useEffect, useContext } from "react";
import DatePickerContainer from "../../components/DatePickerContainer";
import { Stack, TextField, Button, Typography } from "@mui/material";
import PopupModal from "../../components/PopupModal";
import dayjs from "dayjs";

const WeightLogger = () => {
  const [weightEntry, setWeightEntry] = useState({
    weight: "",
    date: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    selectedDate
      ? // console.log(selectedDate.format('YYYY-MM-DD'))
        setWeightEntry((prevEntry) => ({
          ...prevEntry,
          date: selectedDate.format("YYYY-MM-DD"),
        }))
      : null;
  }, [selectedDate]);

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

  const passWeightData = () => {
    console.log(weightEntry);
    setIsModalOpen(true);
    setWeightEntry({
      weight: "",
      date: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    weightEntry.weight &&
    weightEntry.date
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
        Weight Logger
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          height: "250px",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          type="number"
          label="Weight in lb"
          value={weightEntry.weight}
          onChange={handleWeightChange}
          sx={{
            width: "100%",
          }}
        />

        <DatePickerContainer
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

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
