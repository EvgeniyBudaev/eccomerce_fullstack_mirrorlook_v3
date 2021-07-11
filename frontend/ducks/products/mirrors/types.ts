import { InferValueTypes } from "types/common";
import * as actions from "ducks/products/mirrors/actionCreators";

export type MirrorsActionsType = ReturnType<InferValueTypes<typeof actions>>;
