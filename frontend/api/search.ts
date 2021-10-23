import axios from "axios";
import {
  IFetchLiveProductsSearchResponse,
  ISearchedKeyword,
} from "./types/search";

export const fetchLiveProductsSearch = async ({
  searchedKeyword,
}: ISearchedKeyword): Promise<IFetchLiveProductsSearchResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.get<IFetchLiveProductsSearchResponse>(
    `http://127.0.0.1:8000/api/v1/products/?search=${searchedKeyword}`,
    config
  );

  return response.data;
};
