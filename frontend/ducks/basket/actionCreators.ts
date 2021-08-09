import axios from "axios";
import { BASKET_ADD_ITEM } from "./actionTypes";

export const addToBasket =
  (id: number, catalog_slug: string) => async (dispatch, getState) => {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/v1/${catalog_slug}/${id}`
    );
    dispatch({
      type: BASKET_ADD_ITEM,
      payload: response.data,
    });
    localStorage.setItem(
      "basketItems",
      JSON.stringify(getState().basket.entities)
    );
  };
