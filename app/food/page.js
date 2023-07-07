"use client";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import BottomTable from "./BottomTable";
import SideTable from "./SideTable";
import { fetchFoodData, fetchNutritionData } from "../utils/foodData";
import { Stack, backdropClasses } from "@mui/material";

const Food = () => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");

  const searchRecipe = async (searchQuery) => {
    try {
      const response = await fetchNutritionData(searchQuery);
      if (response !== undefined) {
        setData(response);
      }
    } catch (error) {
      console.error("Error while fetching recipe data:", error);
    }
  };

  return (
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          width:'100%',
        }}
        justifyContent="space-between"
        spacing={0}
        flexWrap="wrap"
      >
        <Stack
          direction="column"
          flexWrap="wrap"
          sx={{
            width: { xs: "100%", sm: "60%" },
          }}
        >
          <SearchBar
            data={data}
            searchedTerm={searchedTerm}
            setSearchedTerm={setSearchedTerm}
            setQuery={setQuery}
            searchRecipe={searchRecipe}
          />
          <BottomTable data={data} />
        </Stack>

        <SideTable data={data} />
      </Stack>
  );
};

export default Food;
