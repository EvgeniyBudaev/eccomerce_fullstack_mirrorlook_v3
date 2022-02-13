import axios from "axios";
import { IFetchReviewRequest, IFetchReviewResponse } from "api/types/review";
import { backendBase } from "constants/paths";

export const fetchReviewCreate = async (
  access: string,
  review: IFetchReviewRequest
): Promise<IFetchReviewResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
      Accept: "application/json",
    },
  };
  const response = await axios.post<IFetchReviewResponse>(
    `${backendBase}api/v1/reviews/`,
    review,
    config
  );

  return response.data;
};
