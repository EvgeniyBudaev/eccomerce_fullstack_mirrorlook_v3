import { IReview } from "types/review";

export interface IFetchReviewRequest {
  advantage: string;
  author: number;
  commentary: string;
  disadvantage: string;
  product: number;
  rating: number;
}

export interface IFetchReviewResponse {
  id: number;
  product: IReview;
}
