import { InferValueTypes } from "types/common";
import * as actions from "ducks/products/actionCreator";

export type AccountActionsType = ReturnType<InferValueTypes<typeof actions>>;
