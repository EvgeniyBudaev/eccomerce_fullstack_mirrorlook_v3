export interface IFilter<TItem> {
  entities: TItem[];
  paging: IPaging;
}

export interface IPaging {
  pageNumber: number;
  pagesCount: number;
  displayItems: number;
}
