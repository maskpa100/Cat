import axios from "axios";

export const getCat = async () => {
  const response = await axios.get(
    "https://api.thecatapi.com/v1/images/search"
  );
  return response.data[0].url as string;
};
