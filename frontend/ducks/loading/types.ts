import { InferValueTypes } from "types/common";
import * as actions from "ducks/loading/actionCreators";

export type LoadingActionsType = ReturnType<InferValueTypes<typeof actions>>;
