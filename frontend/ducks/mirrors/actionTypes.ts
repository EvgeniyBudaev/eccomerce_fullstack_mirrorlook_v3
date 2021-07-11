import { InferValueTypes } from "types/common";
import * as actions from "ducks/mirrors/actionCreator";

export type AccountActionsType = ReturnType<InferValueTypes<typeof actions>>;
