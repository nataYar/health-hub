import {

    Card,
    CardContent,
    CardHeader,
    Typography,
    Divider
  } from "@mui/material";

const TopVidgets = () => {
  return (
    <Card sx={{ width: "350px" }}>
      <CardHeader sx={{ textAlign: "center" }} title={'dfvdfv'} />
      <Divider />
      <Typography sx={{ color: "neutral[400]" }} variant="body1" >
          fvdfvdfv
        </Typography>

        <Divider />

      
      
      <CardContent>
        <Typography sx={{ color: "neutral[400]" }} variant="body2" >
          Calories: <span sx={{ color: "primary.main" }} > Name</span>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TopVidgets