export interface IFilterResponse<TItem> {
  entities: TItem[];
  pageItemsCount: number;
  totalItemsCount: number;
}
