import { Reducer } from "redux";
import { IBasket } from "api/types/basket";
import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM } from "./actionTypes";

const initialState = {
  entities: [],
};

export const reducer: Reducer<IBasket> = (state = initialState, action) => {
  const item = action.payload;
  const existItem = state.entities.find(x => x.id === item.id);
  switch (action.type) {
    case BASKET_ADD_ITEM:
      if (existItem) {
        return {
          ...state,
          entities: state.entities.map(x => (x.id === existItem.id ? item : x)),
        };
      } else {
        return {
          ...state,
          entities: [...state.entities, item],
        };
      }
    default:
      return state;
  }
};
