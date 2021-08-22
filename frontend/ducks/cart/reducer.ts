import { Reducer } from "redux";
import { ActionTypes } from "./actionTypes";
import { IActionCartCreate } from "./types";

type IAction = IActionCartCreate;

interface IState {
  date_created: string;
  date_updated: string;
  entities: any;
  id: number;
  user: number;
}

const initialState = {
  date_created: null,
  date_updated: null,
  entities: null,
  id: null,
  user: null,
};

export const reducer: Reducer<IState> = (
  state = initialState,
  action: IAction
) => {
  const { payload } = action;
  console.log("[reducer][payload]", payload);

  switch (action.type) {
    case ActionTypes.CART_SET:
      return {
        ...state,
        date_created: payload.date_created,
        date_updated: payload.date_updated,
        id: payload.id,
        user: payload.user,
      };
    default:
      return state;
  }
};
