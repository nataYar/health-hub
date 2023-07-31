"use client";
import { useState } from "react";
import { Card, Typography, Avatar, Grid, Divider, Stack } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { extraColors, neutral } from "@/app/theme/colors";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const WeightWidget = ({ weightData, currentWeightGoal }) => {
  const { lastWeight, firstWeight } = weightData;

  return (
    <Card
      sx={{ p: "12px", width: { xs: "100%", md: "280px" }, height: "155px" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        width="100%"
      >
        <Grid item>
          <Typography
            sx={{
              fontSize: "2.125rem",
              fontWeight: 500,
              mr: 1,
            }}
          >
            {lastWeight}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: "white",
              color: "extraColors.red",
              mt: 1,
              borderRadius: "50%",
              height: "auto",
              width: " auto",
            }}
          >
            <ShowChartIcon sx={{ height: "30px", width: " 30px" }} />
          </Avatar>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Grid item sx={{ mb: 1.25 }}>
          <Grid container justifyContent="space-between" width="100%">
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: "neutral.900",
              }}
            >
              Current weight
            </Typography>
          </Grid>
        </Grid>

        <Grid item sx={{}}>
          <Divider />
          <Grid container justifyContent="space-between" width="100%">
            
              {lastWeight > currentWeightGoal ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: "neutral.500",
                  }}
                >
                  <span style={{ fontSize:"16px", color: "#6366F1" }}>
                    {lastWeight - currentWeightGoal}{" "}
                  </span>{" "}
                  pounds untill weight goal
                </Typography>
              ) : (
                <Typography
                  variant="body2"
                  sx={{
                    color: "neutral.500",
                  }}
                >
                  <span style={{ fontSize:"16px", color: "#6366F1" }}>
                    {currentWeightGoal - lastWeight}{" "}
                  </span>{" "}
                  pounds untill weight goal
                </Typography>
              )}
          </Grid>
        </Grid>

        <Grid item sx={{ mb: 1.25, }}>
          {firstWeight > lastWeight ? (
            <Stack direction="row" alignItems="center" p="0">
              <Avatar
                variant="rounded"
                sx={{
                  backgroundColor: "white",
                  color: "extraColors.green",
                  borderRadius: "50%",
                  height: "20px",
                  width: "auto",
                }}
              >
                <ArrowDownwardOutlinedIcon
                  sx={{ mr: "5px", height: "100%", width: "100%" }}
                />
              </Avatar>
              <Typography
                variant="body2"
                sx={{
                  color: "extraColors.green",
                  mr: "10px",
                  fontSize:"16px",
                }}
              >
                {firstWeight - lastWeight}
                <span style={{ fontSize:"14px" , color: neutral[500]}}> pounds </span>
                <span style={{ fontSize:"14px", color: neutral[500]}}>  since start </span>
              </Typography>
            </Stack>
          ) : (
            <Stack direction="row" alignItems="center" p="0">
              <Avatar
                variant="rounded"
                sx={{
                  backgroundColor: "white",
                  color: "extraColors.red",
                  borderRadius: "50%",
                  height: "20px",
                  width: "auto",
                }}
              >
                <ArrowUpwardOutlinedIcon
                  sx={{ mr: "5px", height: "100%", width: "100%" }}
                />
              </Avatar>
              <Typography
                variant="body2"
                sx={{
                  color: "extraColors.red",
                  mr: "10px",
                  fontSize:"16px",
                }}
              >
                {lastWeight - firstWeight}
                <span style={{ fontSize:"14px",color: neutral[500] }}> pounds </span>
                <span style={{ fontSize:"14px", color: neutral[500]}}>  since start </span>
              </Typography>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default WeightWidget;
