import { IAuthor } from "./author";
import { IReview } from "./review";

export interface IComment {
  author: IAuthor;
  date_created: Date;
  date_updated: Date;
  id: number;
  commentary: string;
  review: IReview;
}
