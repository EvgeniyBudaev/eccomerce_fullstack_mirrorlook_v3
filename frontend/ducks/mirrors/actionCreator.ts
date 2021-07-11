import { PRODUCTS_SUCCESS } from "constants/products";
import { IMirror } from "types/mirror";
import { IConsole } from "types/console";

export const fetchMirrors = (mirrors: IMirror[]) =>
  ({
    type: PRODUCTS_SUCCESS,
    payload: mirrors,
  } as const);

// export const fetchConsoles = (consoles: IConsole[]) =>
//   ({
//     type: PRODUCTS_SUCCESS,
//     payload: consoles,
//   } as const);
