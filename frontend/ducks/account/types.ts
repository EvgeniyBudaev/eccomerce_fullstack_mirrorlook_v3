import { InferValueTypes } from "types/common";
import * as actions from "ducks/account/actionCreators";

export type AccountActionsType = ReturnType<InferValueTypes<typeof actions>>;
