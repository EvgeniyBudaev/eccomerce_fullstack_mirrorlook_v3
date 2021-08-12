import { Reducer } from "redux";
import { IBasket } from "api/types/basket";
import { ActionTypes } from "./actionTypes";
import { IActionAddToBasket } from "./types";

const initialState = {
  entities: null,
};

type IAction = IActionAddToBasket;

export const reducer: Reducer<any> = (
  state = initialState,
  action: IAction
) => {
  console.log("[action.payload]", action.payload);
  const { payload } = action;
  const newItem = action.payload;
  // const existItem = state.entities.find(
  //   item => item.product_slug === newItem.product_slug
  // );

  switch (action.type) {
    case ActionTypes.BASKET_ADD_ITEM:
      // return {
      //   ...state,
      //   entities: newItem,
      // };
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };

    // case ActionTypes.BASKET_ADD_ITEM:
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
