import { IReview } from "types/review";
import { IAuthor } from "types/author";

export interface IFetchCommentRequest {
  author: number;
  commentary: string;
  review: number;
}

export interface IFetchCommentResponse {
  author: IAuthor;
  date_created: string;
  date_updated: string;
  id: number;
  commentary: string;
  review: IReview;
}
