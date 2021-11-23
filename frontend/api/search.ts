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

  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const response = await axios.get<IFetchLiveProductsSearchResponse>(
    `${baseUrl}api/v1/products/?search=${searchedKeyword}`,
    config
  );

  return response.data;
};
