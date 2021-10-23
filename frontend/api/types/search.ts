import { IConsole } from "types/console";
import { IMirror } from "types/mirror";

export interface ISearchedKeyword {
  searchedKeyword: string;
}

export type SearchProductsType = IMirror[] | IConsole[];

export type SearchProductType = IMirror | IConsole;

export interface IFetchLiveProductsSearchResponse {
  entities: SearchProductsType;
  links: {
    next: string | null;
    previous: string | null;
  };
  pageItemsCount: number;
  totalItemsCount: number;
}
