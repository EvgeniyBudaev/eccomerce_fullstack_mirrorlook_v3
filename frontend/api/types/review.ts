import { IReview } from "types/review";

export interface IFetchReviewRequest {
  author: number;
  product: number;
  rating: number;
  text: string;
  title: string;
}

export interface IFetchReviewResponse {
  id: number;
  product: IReview;
}
