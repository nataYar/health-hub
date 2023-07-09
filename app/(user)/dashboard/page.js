'use client'
import DonutChart  from "./charts/DonutChart";
import {
  Box, 
  Stack,
} from "@mui/material";
import LineChart from "./charts/LineChart";
import CaloryWidget from "./Widgets/CaloryWidget";
import WeightWidget from "./Widgets/WeightWidget";

export default function Dashboard() {
  return (
    <Stack  width='100%' height='auto' >
      <Stack width='100%' height='auto' direction='row' flexWrap='wrap' justifyContent='space-evenly' alignItems='center' marginBottom='30px'> 
        <CaloryWidget />
        <WeightWidget />
        {/* 
        <TopWidgets /> */}
      </Stack>
      <Box display="flex" flexDirection='row'  flexWrap='wrap' justifyContent="space-evenly" alignItems="flex-start"
      sx={{ gap: '25px', width: '100%', height:'auto'}}
      >
      <LineChart />
      <DonutChart  />
    </Box>
    </Stack>
      
  );
}
