export interface IConsoles {
  entities: IConsole[];
}

export interface IConsole {
  catalog_id: number[];
  category_id: number;
  color: string;
  count_legs: number;
  created: string;
  description: string;
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
