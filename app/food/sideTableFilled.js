
import {
    Box,
    Divider,
    List,
    ListItem,
    Paper,
    Stack,
    ListItemText,
    Typography,
  } from "@mui/material";
  
  const flex = {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    py: '2px'
  };
  
  const flexPy = {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    py: "1px",
  };
  
const sideTableFilled = () => {
  return (
    <Box
      component={Paper}
      sx={{
        width: { xs: "100%", sm: "30%" },
        p: "20px",
        height: "auto",
        mb: "30px",
        borderRadius: "20px",
        // boxShadow: "2px 1px 20px #D2D6DB",
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5",
        color: "neutral.800",
      }}
    >
      <Typography sx={{ color:'#111927'}}
      textAlign="center" variant="h5">
        Nutrition Facts
      </Typography>
      <Divider sx={{ borderWidth: "1px" }} />
      <Typography variant="subtitle2" sx={{ textAlign: "left", my: "10px" }}>
        Amount Per Serving
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">Calories</Typography>
        <Typography variant="h5">{data.calories}</Typography>
      </Stack>
      <Divider sx={{ borderWidth: "1px"}} />
      <Typography
        variant="subtitle2"
        sx={{ fontSize: "10px", fontWeight: "700", textAlign: "right" }}
      >
        % Daily Value*
      </Typography>

      <List>
        <ListItem sx={flex}>
          <Typography variant="subtitle1">
            <strong>Total Fat 56.2 g</strong>
          </Typography>
          <Typography variant="subtitle2" align="right">
            <strong>22%</strong>
          </Typography>
        </ListItem>

        <Divider />

        <ListItem sx={flexPy}>
          <Typography sx={{ ml: "15px" }} variant="subtitle2">
            Saturated Fat 15.3 g
          </Typography>
          <Typography variant="subtitle2" align="right">
            <strong>22%</strong>
          </Typography>
        </ListItem>
        <Divider />

        <ListItem sx={flexPy}>
          <Typography sx={{ ml: "15px" }} variant="subtitle2">
            Trans Fat 0.2 g
          </Typography>
        </ListItem>
        <Divider />

        <ListItem sx={flex}>
          <Typography variant="subtitle1">
            <strong>Cholesterol</strong> 319.9 mg
          </Typography>
          <Typography variant="subtitle2" align="right">
            <strong>22%</strong>
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={flex}>
          <Typography variant="subtitle1">
            <strong>Sodium</strong> 290.9 mg
          </Typography>

          <Typography variant="subtitle2" align="right">
            <strong>22%</strong>
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={flex}>
          <Typography variant="subtitle1">
            <strong>Total Carbohydrate</strong> 155.2 g
          </Typography>
          <Typography variant="subtitle2" align="right">
            <strong>22%</strong>
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={flexPy}>
          <Typography variant="subtitle2" sx={{ ml: "15px" }}>
            Dietary Fiber 0 g
          </Typography>

          <Typography variant="subtitle2" align="right">
            <strong>22%</strong>
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={flexPy}>
          <ListItemText
            primary={
              <Typography variant="subtitle2" sx={{ ml: "15px" }}>
                Total Sugars 0 g
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem sx={flexPy}>
          <Typography variant="subtitle2" sx={{ ml: "15px" }}>
            Includes - Added Sugars
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={flex}>
          <Typography variant="subtitle1">
            <strong>Protein</strong> 69.3 g
          </Typography>
          <Typography variant="subtitle2" align="right">
            <strong>22%</strong>
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={flex}>
          <Typography variant="subtitle1">
            <strong>Vitamin D</strong> 0.3 µg
          </Typography>
          <Typography variant="subtitle2" align="right">
            <strong>22%</strong>
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={flex}>
          <Typography variant="subtitle1">
            <strong>Calcium</strong> 48.5 mg
          </Typography>
          <Typography variant="subtitle2" align="right">
            <strong>5%</strong>
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={flex}>
          <Typography variant="subtitle1">
            <strong>Iron</strong> 3.9 mg
          </Typography>
          <Typography variant="subtitle2" align="right">
            <strong>22%</strong>
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={flex}>
          <Typography variant="subtitle1">
            <strong>Potassium</strong> 866 mg
          </Typography>
          <Typography variant="subtitle2" align="right">
            <strong>22%</strong>
          </Typography>
        </ListItem>
      </List>
    </Box>
  )
}

export default sideTableFilled