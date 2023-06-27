"use client";
import { useState } from "react";
import Wrapper from "@/components/Wrapper";
import SearchBar from "./SearchBar";
import RecipeLists from "./RecipeLists";
import { fetchData } from "../utils/foodData";

const Food = () => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");

  const searchRecipe = async (searchQuery) => {
    try {
      const response = await fetchData(searchQuery);
      console.log(response)
      setData(response);
      // props.setLoader(false)
    } catch (error) {
      console.error('Error while fetching recipe data:', error);
    }
  };

  return (
    <Wrapper>
      <SearchBar searchedTerm={searchedTerm} setSearchedTerm={setSearchedTerm} setQuery={setQuery} searchRecipe={searchRecipe}/>
      <RecipeLists data={data} />
    </Wrapper>
  );
};

export default Food;
