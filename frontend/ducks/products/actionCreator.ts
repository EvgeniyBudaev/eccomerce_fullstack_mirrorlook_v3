import { PRODUCTS_SUCCESS } from "constants/products";
import { IMirror } from "types/mirror";

export const fetchProducts = (products: IMirror[]) =>
  ({
    type: PRODUCTS_SUCCESS,
    payload: products,
  } as const);
