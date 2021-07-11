import { MIRRORS_SUCCESS } from "constants/products";
import { IMirror } from "types/mirror";

export const fetchMirrors = (mirrors: IMirror[]) =>
  ({
    type: MIRRORS_SUCCESS,
    payload: mirrors,
  } as const);
