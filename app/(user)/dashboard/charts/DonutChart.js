"use client";
import { Stack } from "@mui/material";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)
const data = {
  labels: ["Carbs", "Protein", "Fat"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const DonutChart = () => {
  return (
    <Stack sx={{ 
      width:'350px', 
    height:'380px', 
    padding:'20px', 
    backgroundColor:'white',
    borderRadius:'20px',
    }}>
      <Doughnut data={data} width={'100%'} height={'100%'} />
    </ Stack>
  );
};

export default DonutChart;
