import * as actions from "ducks/order/actionCreators";
import { InferValueTypes } from "types/common";
import { ActionTypes } from "ducks/order";

export type OrderActionsType = ReturnType<InferValueTypes<typeof actions>>;

export interface IPayloadOrderShippingAddressSave {
  address: string;
}

export interface IActionOrderShippingAddressSave {
  type: ActionTypes.ORDER_SHIPPING_ADDRESS_SAVE;
  payload: IPayloadOrderShippingAddressSave;
}

export interface IFetchOrderShippingAddressSavePayload {
  address: string;
}

export interface IFetchOrderShippingAddressSaveProps {
  payload: IFetchOrderShippingAddressSavePayload;
  type: string;
}
