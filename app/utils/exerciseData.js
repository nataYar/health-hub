export const exerciseOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
};

export const fetchData = async(url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
	  return data
  } catch (error) {
    console.error(error);
  }
}

