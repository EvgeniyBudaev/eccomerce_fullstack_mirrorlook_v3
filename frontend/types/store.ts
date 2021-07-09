import { IMirrors } from "types/mirror";

export interface ICatalog {
  mirrors: IMirrors;
}

export interface IStore {
  catalog: ICatalog;
}
