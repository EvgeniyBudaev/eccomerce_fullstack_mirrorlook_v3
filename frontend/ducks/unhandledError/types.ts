import { InferValueTypes } from "types/common";
import * as actions from "ducks/unhandledError/actionCreators";

export type UnhandledErrorActionsType = ReturnType<
  InferValueTypes<typeof actions>
>;
