export interface IConsoleAttribute {
  id: number;
  form: string;
}

export interface IConsole {
  attributes: IConsoleAttribute[];
  brand: string;
  catalog: string;
  catalog_slug: string;
  category: string;
  count_in_stock: number;
  date_created: string;
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
