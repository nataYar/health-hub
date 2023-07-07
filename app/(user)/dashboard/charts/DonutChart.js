"use client";
import { Stack, useTheme  } from "@mui/material";
import { extraColors } from '../../../theme/colors';
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

const DonutChart = () => {
  const theme = useTheme();
  
  const data = {
    labels: ["Carbs", "Protein", "Fat"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [extraColors.red, extraColors.green, theme.palette.primary.main],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

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
