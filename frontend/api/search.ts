import axios from "axios";

export const fetchSearch = async ({ searchedKeyword }: any): Promise<any> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.get<any>(
    `http://127.0.0.1:8000/api/v1/products/?search=${searchedKeyword}`,
    config
  );
  console.log("response: ", response.data);

  return response.data;
};
