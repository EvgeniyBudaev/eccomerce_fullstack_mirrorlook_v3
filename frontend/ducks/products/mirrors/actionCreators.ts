import { MIRRORS_SUCCESS } from "ducks/products/mirrors";
import { IMirror } from "types/mirror";

export const fetchMirrors = (mirrors: IMirror[]) =>
  ({
    type: MIRRORS_SUCCESS,
    payload: mirrors,
  } as const);
