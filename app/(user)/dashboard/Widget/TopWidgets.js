import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Avatar,
  Box,
  Grid,
} from "@mui/material";
import { extraColors } from "@/app/theme/colors";

import ProgressBar from "./ProgressBar";

import RamenDiningRoundedIcon from "@mui/icons-material/RamenDiningRounded";

const TopWidgets = () => {
  return (
    <Card sx={{ p: "12px", width: "300px" }}>
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
            50
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: "white",
              color: "extraColors.green",
              mt: 1,
              borderRadius: "50%",
              height:'auto', width:' auto'
            }}
          >
            <RamenDiningRoundedIcon sx={{ height:'30px', width:' 30px'}}/>
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
                color: "neutral.800",
                mb: 0.75,
              }}
            >
              Remaining calories
            </Typography>
            <ProgressBar percentage="80" />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TopWidgets;
