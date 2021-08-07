import { InferValueTypes } from "types/common";
import * as actions from "ducks/account/actionCreators";

export type AccountActionsType = ReturnType<InferValueTypes<typeof actions>>;

export interface IActionSetUserTokenType {
  access: string;
  refresh: string;
}

export interface IActionSetUserType {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone_number: string;
}

export interface IFetchUserTokenPayload {
  email: string;
  password: string;
}

export interface IFetchUserTokenProps {
  payload: IFetchUserTokenPayload;
  type: string;
}