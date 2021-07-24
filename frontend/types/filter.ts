export interface IFilter<TItem> {
  entities: TItem[];
  paging: IPaging;
}

export interface IPaging {
  displayItems: number;
  pageNumber: number;
  pagesCount: number;
  totalItemsCount: number;
}
