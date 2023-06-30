'use client'
import DonutChart  from "./DonutChart";
import { Container } from "@mui/material";

export default function Dashboard() {
  const sections = [
    { percent: 40, borderSize: '10px', color: '#0088FE' },
    { percent: 30, borderSize: '8px', color: '#00C49F' },
    { percent: 20, borderSize: '6px', color: '#FFBB28' },
    { percent: 10, borderSize: '4px', color: '#FF8042' },
  ];

  return (
    <Container>
      {/* all statistics from your logs- food, health, fitness */}
      <DonutChart sections={sections}  />
    </Container>
  );
}
