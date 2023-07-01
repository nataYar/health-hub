'use client'
import DonutChart  from "./charts/DonutChart";
import { Container } from "@mui/material";
import LineChart from "./charts/LineChart";

export default function Dashboard() {
 

  return (
    <Container>
      all statistics from your logs- food, exercises, weight 
      <LineChart />
      <DonutChart  />
    </Container>
  );
}
