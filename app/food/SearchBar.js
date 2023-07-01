
import { Box, Grid, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ data, searchedTerm, setSearchedTerm, searchRecipe }) => {
  
  const handleSearch = () => {
    searchRecipe(searchedTerm);
    clearInput();
  };

  const handleInputChange = (e) => {
    setSearchedTerm(e.target.value);
  };

  const clearInput = () => {
    setSearchedTerm("")
  }

  return (
    <Box sx={{  
      width: "100%"}} >
        <Box sx={{  
          width: "100%", 
          mb:"15px",
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5",
          color: "neutral.800",
          borderRadius: "20px",
         }} >
        <TextField
        sx={{ 
          mx:"0",
         px:"0", 
        width:"100%",   
        borderRadius: "20px",
        backgroundColor:'common.white',
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5",
        color: "neutral.800",
       }}
        multiline
        rows={4}
        variant="outlined" 
        placeholder={`Enter an ingredient list of your meal, like \n1 cup rice,\n10 oz chickpeas\nEnter each ingredient on a new line.`}
  
        value={searchedTerm}
        onChange={handleInputChange}
        
      />
        </Box>
        <Grid container direction='row' justifyContent="space-evenly" spacing={2}>
          <Grid item >
          <Button
            variant="contained"
            onClick={clearInput}
            sx={{ width: "auto", 
          backgroundColor:"neutral.400"}} >
            Clear input
          </Button>
          </Grid >
          <Grid item >
          <Button
            variant="contained"
            onClick={handleSearch}
            startIcon={<SearchIcon />}
            sx={{ width: "auto"}}
          >
            Search
          </Button >
          </Grid>
        </ Grid>
    </Box>
  );
};

export default SearchBar;