import axios from "axios";
import { backendBase } from "constants/paths";
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
    `${backendBase}api/v1/products/?ordering=-count_in_stock%2Cprice&search=${searchedKeyword}`,
    config
  );

  return response.data;
};
