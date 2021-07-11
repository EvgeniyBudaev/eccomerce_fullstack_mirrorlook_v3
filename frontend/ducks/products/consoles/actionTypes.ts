import { InferValueTypes } from "types/common";
import * as actions from "ducks/products/consoles/actionCreators";

export type AccountActionsType = ReturnType<InferValueTypes<typeof actions>>;
