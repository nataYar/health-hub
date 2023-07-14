"use client";

import { useContext, useEffect, useState} from "react";
import { UserContext } from "../app/context/userProvider";
import dayjs from "dayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const DatePickerContainer = ({ selectedDate, setSelectedDate, widthMd }) => {
  const { screenWidth } = useContext(UserContext);

// useEffect(() => {
//   console.log(selectedDate)
//     }, [selectedDate])

  return (
    <>
      {screenWidth < 600 ? (
        <MobileDatePicker
          defaultValue={dayjs()}
          label="Pick a date"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          sx={{
            width: {xs: "100%", md: widthMd },
          }}
        />
      ) : (
        <DatePicker
          sx={{
            width: {xs: "100%", md: widthMd}
          }}
          label="Pick a date"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
      )}
    </>
  );
};

export default DatePickerContainer;
