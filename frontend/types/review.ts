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
  author: IAuthor;
  date_created: Date;
  date_updated: Date;
  id: number;
  product: IMirror;
  rating: number;
  text: string;
  title: string;
}

export interface IReviewsResponse {
  error?: string;
  entities: IReview[];
  paging: IPaging;
}
