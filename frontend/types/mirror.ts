export interface IMirrors {
  entities: IMirror[];
}

export interface IMirror {
  brand: string;
  catalog_slug: string;
  category_id: number;
  count_in_stock: number;
  created: string;
  description: string;
  form: string;
  frame_color: string;
  frame_material: string;
  height_with_frame: string;
  height_without_frame: string;
  id: number;
  is_faced: boolean;
  image: string;
  mirror_material: string;
  price: string;
  product_photo1: string;
  product_photo2: string;
  product_photo3: string;
  product_photo4: string;
  product_slug: string;
  rating: string;
  title: string;
  user: number;
  weight: string;
  width_with_frame: string;
  width_without_frame: string;
}
