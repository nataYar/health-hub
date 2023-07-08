"use client";

import { useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const DatePicker = ({ weightEntry, handleChange }) => {
    const [date, setDate] = useState({
        day: '',
        month: '',
        year: ''
    })

  // Generate an array of numbers from 1 to 31 for days
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  // Generate an array of numbers from 1 to 12 for months
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

  
  const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: 5 },
  (_, index) => currentYear + index
);

const handleSelection = (e, datePart) => {
  let selectedNum = e.target.value;
  handleChange(selectedNum, datePart);
};

  return (
    <Box sx={{
        mb:'20px',
      }}>
      <FormControl
        sx={{
          width: "auto",
        }}
      >
        <InputLabel>Day</InputLabel>
        <Select
          value={weightEntry.date.day || ""}
          name="day"
          onChange={(e) => handleSelection(e, "day")}
          sx={{
            width: '70px',
            mr:'20px',
          }}
        >
            <MenuItem value="">Select day</MenuItem>
            {days.map((day) => (
              <MenuItem key={day} value={day}
              >
                {day}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Month</InputLabel>
        <Select value={weightEntry.date.month} name="month" onChange={(e) => handleSelection(e, "month")}
        sx={{
            width: '85px',
            mr:'20px',
          }}>
          <MenuItem value="">Select month</MenuItem>
          {months.map((month) => (
            <MenuItem key={month} value={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Year</InputLabel>
        <Select value={weightEntry.date.year} name="year" 
        onChange={(e) => handleSelection(e, "year")}
        sx={{
            width: '80px'
          }}>
          <MenuItem value="">Select year</MenuItem>
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DatePicker;
