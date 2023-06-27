import { useState } from "react";
import { Grid, Typography, TextField, Button, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ searchedTerm, setSearchedTerm, searchRecipe }) => {
  const handleSearch = () => {
    searchRecipe(searchedTerm);
  };

  const handleInputChange = (e) => {
    setSearchedTerm(e.target.value);
  };

  return (
    <Container>
      <Typography variant="h5" component="strong" gutterBottom>
        Search Recipes
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Search your recipe"
            placeholder="Search your recipe"
            value={searchedTerm}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            onClick={handleSearch}
            startIcon={<SearchIcon />}
            fullWidth
          >
            Search
          </Button>
        </Grid>
      </Grid>
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