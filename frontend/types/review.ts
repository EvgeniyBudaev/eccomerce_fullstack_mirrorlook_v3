import { IMirror } from "types/mirror";
import { IPaging } from "./filter";

export interface IAuthor {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone_number: number;
}

export interface IReview {
  advantage: string;
  author: IAuthor;
  disadvantage: string;
  date_created: Date;
  date_updated: Date;
  commentary: string;
  id: number;
  product: IMirror;
  rating: number;
}

export interface IReviewsResponse {
  error?: string;
  entities: IReview[];
  paging: IPaging;
}
