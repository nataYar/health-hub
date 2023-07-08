"use client";
import { Stack, Typography, useTheme  } from "@mui/material";
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

  const nutrients = {
    carbs: 50,
    protein: 20,
    fat: 10
  };

  const data = {
    labels: ["Carbs", "Protein", "Fat"],
    datasets: [
      {
        data: [nutrients.carbs, nutrients.protein, nutrients.fat],
        backgroundColor: [extraColors.orange, extraColors.green, theme.palette.primary.main],
        hoverBackgroundColor: [extraColors.orange, extraColors.green, theme.palette.primary.main],
      },
    ],
  };

  return (
    <Stack 
    direction='column'
    justifyContent='space-between'
    sx={{ 
        width: {
         xs: '100%',
        sm: '400px',
         md: '350px',
        
       } ,
       height: {
        xs: 'auto',
        sm: '450px',
        md: '400px',
      } ,
    padding:'20px', 
    backgroundColor:'white',
    borderRadius:'20px',
   
    }}>
      <Doughnut data={data} width={'100%'} height={'100%'} />
      <Stack direction='row' width='100%' justifyContent='center' marginTop='20px'>
      <Typography variant="h5">
        
        <span style={{ color: theme.palette.neutral[400], fontWeight:'normal', fontSize:'12px' }}>carbs:  </span>  
          {nutrients.carbs}
        </Typography>
        <Typography variant="h5" sx={{ml:'20px'}}>
        
        <span style={{ color: theme.palette.neutral[400], fontWeight:'normal', fontSize:'12px' }}>protein:  </span>  
          {nutrients.protein}
        </Typography>
        <Typography variant="h5" sx={{ml:'20px'}}>
        
        <span style={{ color: theme.palette.neutral[400], fontWeight:'normal', fontSize:'12px' }}>fat:  </span>  
          {nutrients.fat}
        </Typography>
      </Stack>
      
    </ Stack>
  );
};

export default DonutChart;
