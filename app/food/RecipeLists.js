"use client";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
} from "@mui/material";

function RecipeLists({ data }) {


//   useEffect(() => {
//     fetchData(query).then((response) => {
//       setData(response);
//       // props.setLoader(false)
//     });
//   }, []);


  return (
    <Container>
      <Grid className="flexbox">
        {/* {data &&
          data.hits.map((item, index) => (
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))} */}
      </Grid>
    </Container>
  );
}

export default RecipeLists;
