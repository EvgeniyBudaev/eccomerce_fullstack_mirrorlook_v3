export interface IFilter<TItem> {
  entities: TItem[];
  paging: IPaging;
}

export interface IPaging {
  pageItemsCount: number;
  pageNumber: number;
  pagesCount: number;
  totalItemsCount: number;
}
