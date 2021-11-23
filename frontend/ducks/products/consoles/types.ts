import { InferValueTypes } from "types/common";
import * as actions from "ducks/products/consoles/actionCreators";

export type ConsolesActionsType = ReturnType<InferValueTypes<typeof actions>>;
