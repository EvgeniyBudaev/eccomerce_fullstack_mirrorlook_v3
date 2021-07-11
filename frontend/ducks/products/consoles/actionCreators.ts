import { CONSOLES_SUCCESS } from "constants/products";
import { IConsole } from "types/console";

export const fetchConsoles = (consoles: IConsole[]) =>
  ({
    type: CONSOLES_SUCCESS,
    payload: consoles,
  } as const);
