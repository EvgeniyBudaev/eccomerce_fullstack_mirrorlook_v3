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

  const baseUrl = "http://62.84.119.86/";
  const response = await axios.get<IFetchLiveProductsSearchResponse>(
    `api/v1/products/?search=${searchedKeyword}`,
    config
  );

  return response.data;
};
