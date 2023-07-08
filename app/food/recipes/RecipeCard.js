import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
  CardMedia,
  Divider
} from "@mui/material";

const RecipeCard = ({
  title,
  image,
  calories,
  cuisineType,
  dietLabels,
  ingredients,
  totalWeight,
}) => {
  return (
    <Card sx={{ width: "350px" }}>
      <CardHeader sx={{ textAlign: "center" }} title={title} />
      <Divider />
      <Typography sx={{ color: "neutral[400]" }} variant="body1" >
          {cuisineType}
        </Typography>
        <Typography sx={{ color: "neutral[400]" }} variant="body2" >
          {dietLabels}
        </Typography>
        <Divider />

      <CardMedia
        component="img"
        src={image}
        alt=""
        sx={{
          ml: "auto",
          mr: "auto",
          width: "50%",
          borderRadius: "8px",
        }}
      />
      
      <CardContent>
        <Typography sx={{ color: "neutral[400]" }} variant="body2" >
          Calories: <span sx={{ color: "primary.main" }} >{calories}</span>
        </Typography>

        <Typography sx={{ color: "neutral[400]" }} variant="body2" >
          Total weight: <span sx={{ color: "primary.main" }} >{totalWeight}</span>
        </Typography>

        <Typography sx={{ color: "neutral[400]" }} variant="body2" >
          Ingredients:
        </Typography>
        <List>
          {ingredients.map((ingredient, index) => (
            <ListItem key={index} disablePadding sx={{ color: "neutral[400]" }}>
              <ListItemText primary={ingredient.text} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
