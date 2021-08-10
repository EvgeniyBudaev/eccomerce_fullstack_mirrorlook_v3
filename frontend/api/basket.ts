import axios from "axios";
import { IFetchAddToBasketResponse } from "api/types/basket";

export const fetchAddToBasket = async (
  product_slug: string,
  catalog_slug: string
): Promise<IFetchAddToBasketResponse> => {
  const response = await axios.get<IFetchAddToBasketResponse>(
    `http://127.0.0.1:8000/api/v1/${catalog_slug}/${product_slug}`
  );
  return response.data;
};
