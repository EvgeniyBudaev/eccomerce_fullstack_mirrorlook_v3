import axios from "axios";
// import { backendBase } from "constants/paths";
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
    `http://62.84.119.86/api/v1/products/?search=${searchedKeyword}`,
    config
  );

  return response.data;
};
