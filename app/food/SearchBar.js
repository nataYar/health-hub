import { useState } from "react";
import { Grid, Typography, TextField, Button, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ data, searchedTerm, setSearchedTerm, searchRecipe }) => {
  const handleSearch = () => {
    searchRecipe(searchedTerm);
  };

  const handleInputChange = (e) => {
    setSearchedTerm(e.target.value);
  };

  const clearInput = (e) => {
    setSearchedTerm("")
  }

  return (
    <Container sx={{  width: data ? "50%" : "100%"}}>
        <Container sx={{ mt:'15px', mb:"15px"}} >
        <TextField
        sx={{  width:"100%"}}
        multiline
        rows={4} // Specify the number of rows you want to display
        variant="outlined" // Optional: Specify the variant
        placeholder={`Enter an ingredient list, like \n1 cup rice,\n 10 oz chickpeas\nEnter each ingredient on a new line.`}
  
        value={searchedTerm}
        onChange={handleInputChange}
        
      />
          {/* <TextField
            fullWidth
            label="Search your recipe"
            placeholder="Search your recipe"
            value={searchedTerm}
            onChange={handleInputChange}
          /> */}
        </Container>

        <Grid container direction='row' justifyContent="center" spacing={2}>
          <Grid item>
          <Button
            variant="contained"
            onClick={clearInput}
            // startIcon={<SearchIcon />}
            sx={{ width: "auto"}}
          >
            Clear input
          </Button>
          </Grid>
          <Grid item>
          <Button
            variant="contained"
            onClick={handleSearch}
            startIcon={<SearchIcon />}
            sx={{ width: "auto"}}
          >
            Search
          </Button>
          </Grid>
        </ Grid>
    </Container>
  );
};

export default SearchBar;





 // <Box>
    //     <form>
    //         <TextField
    //         id="search-bar"
    //         className="text"
    //         onInput={(e) => {
    //             setSearchQuery(e.target.value);
    //         }}
    //         label="Find the foods"
    //         variant="outlined"
    //         placeholder="Search..."
    //         size="small"

    //         sx={{ color: "naurtal.50" }}
    //         />
    //         <IconButton type="submit" aria-label="search">
    //         <SearchIcon sx={{ color: "primary.main" }} />
    //         <RecipeLists />
    //         </IconButton>


    //     </form>
    // </Box>