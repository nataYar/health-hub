"use client";

import { useState } from "react";
import {
  Stack
} from "@mui/material";
import dayjs from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const DatePickerContainer = ({ selectedDate, setSelectedDate}) => {


  return (
  <>
    {/* <MobileDatePicker defaultValue={dayjs()}
     label="Controlled picker"
     value={selectedDate}
     onChange={(newValue) => setSelectedDate(newValue)}
      /> */}
    <DatePicker defaultValue={dayjs()} 
     label="Controlled picker"
     value={selectedDate}
     onChange={(newValue) => setSelectedDate(newValue)}/></>
  );
};

export default DatePickerContainer ;
