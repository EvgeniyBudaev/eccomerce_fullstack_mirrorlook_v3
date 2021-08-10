import { Reducer } from "redux";
import { IBasket } from "api/types/basket";
import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM } from "./actionTypes";
import { BasketActionsType } from "./types";

export interface IBasketState {
  entities: IBasket | [];
}

const initialState = {
  entities: [],
};

export const reducer: Reducer<IBasket, BasketActionsType> = (
  state = initialState,
  action
) => {
  console.log("[basket][action]", action);
  // const newItem = action.payload;
  // const existItem = state.entities.find(
  //   item => item.product_slug === newItem.product_slug
  // );
  switch (action.type) {
    case BASKET_ADD_ITEM:
      return state;
    // case BASKET_ADD_ITEM:
    //   if (existItem) {
    //     return {
    //       ...state,
    //       entities: state.entities.map(item =>
    //         item.product_slug === existItem.product_slug ? newItem : item
    //       ),
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       entities: [...state.entities, newItem],
    //     };
    //   }
    default:
      return state;
  }
};
