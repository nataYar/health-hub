"use client";
import { useState, useEffect, useContext } from "react";
import SearchBar from "./SearchBar";
import BottomTable from "./BottomTable";
import SideTable from "./SideTable";
import { fetchFoodData, fetchNutritionData } from "../utils/foodData";
import { Stack } from "@mui/material";
import { UserContext } from "../context/userProvider";
import PopupModal from "@/components/PopupModal";

const Food = () => {
  const { myUser, updateUser } = useContext(UserContext);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [data, setData] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const [foodItems, setFoodItems] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockupData = [
    {
      calories: 2580,
      carbs: 200,
      fats: 181,
      food: "chicken",
      protein: 223,
      qty: 1,
      unit: "whole",
      weight: 1200,
    },
    {
      calories: 580,
      carbs: 20450,
      fats: 1381,
      food: "chiken",
      protein: 83,
      qty: 2,
      unit: "whole",
      weight: 1200,
    },
  ];

  useEffect(() => {
    if (data) {
      const nutrients = data.totalNutrients;

      const carbs = nutrients.CHOCDF?.quantity || 0;
      const fats = nutrients.FAT?.quantity || 0;
      const protein = nutrients.PROCNT?.quantity || 0;
      console.log(carbs, fats, protein);

      data.ingredients.map((el) => {
        el.parsed.map((ingr) => {
          setFoodItems((prevState) => [
            ...prevState,
            {
              weight: ingr.weight,
              food: ingr.food,
              qty: ingr.quantity,
              unit: ingr.measure,
              calories: Math.round(ingr.nutrients.ENERC_KCAL.quantity),
              carbs: Math.round(carbs),
              fats: Math.round(fats),
              protein: Math.round(protein),
            },
          ]);
        });
      });
    }
  }, [data]);

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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const handleSubmit = () => {
  //   weightEntry.weight !==  null  && weightEntry.date
  //     ? passWeightData()
  //     : alert("Please log weight and date");
  // };

  const passcaloriesData = async () => {
    // manageLogFn(myUser.id, weightEntry.date, 'weight', weightEntry.weight)
    setIsModalOpen(true);
    setSelectedDate(null);
    // setWeightEntry({
    //   weight: "",
    //   date: "",
    // });
  };

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
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
          searchRecipe={searchRecipe}
        />
        <BottomTable
          // foodItems={foodItems}
          foodItems={mockupData}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
         
        />
        {/* {data ? <BottomTable data={data} /> : null} */}
      </Stack>
      <SideTable data={data} />
      {/* {data ? <SideTable data={data} /> : null} */}
      <PopupModal
        text="food data logged!"
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </Stack>
  );
};

export default Food;
