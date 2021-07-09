import { IPaging } from "types/filter";

export interface IFilter<TItem> {
  entities: TItem[];
  paging: IPaging;
}

export interface IMirrors {
  entities: IMirror[];
}

export interface IMirror {
  catalog_id: number[];
  category_id: number;
  created: string;
  description: string;
  form: string;
  id: number;
  image: string;
  price: string;
  product_photo1: string;
  product_photo2: string;
  product_photo3: string;
  product_photo4: string;
  product_slug: string;
  rating: string;
  title: string;
  user: number;
}
