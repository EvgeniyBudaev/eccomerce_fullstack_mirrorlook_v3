export interface IMirrorAttribute {
  id: number;
  is_faced: boolean;
  form: string;
  frame_color: string;
  frame_material: string;
  height_with_frame: string;
  height_without_frame: string;
  mirror_material: string;
  weight: string;
  width_with_frame: string;
  width_without_frame: string;
}

export interface IMirror {
  attributes: IMirrorAttribute[];
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
