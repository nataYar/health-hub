"use client";
import { useState } from "react";
import Wrapper from "@/components/Wrapper";
import SearchBar from "./SearchBar";
import BottomTable from "./BottomTable";

import { fetchFoodData, fetchNutritionData } from "../utils/foodData";
import { Typography, TextField } from "@mui/material";

const Food = () => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");
  // const [sideBar, setSideBar] = useState(false);

  const searchRecipe = async (searchQuery) => {
    try {
      // const ingr = searchQuery.split('\n');
      // console.log(ingr)
      const response = await fetchNutritionData(searchQuery);
      // console.log(response);
      // setData(response);
      // props.setLoader(false)
    } catch (error) {
      console.error("Error while fetching recipe data:", error);
    }
  };

  return (
    <Wrapper>
      <Typography variant="h4">Get nutrition value of your meal</Typography>

      <SearchBar
        data={data}
        searchedTerm={searchedTerm}
        setSearchedTerm={setSearchedTerm}
        setQuery={setQuery}
        searchRecipe={searchRecipe}
      />
      <BottomTable  data={data} />
    </Wrapper>
  );
};

export default Food;
