import axios from "axios";
import { IFetchCommentRequest } from "api/types/comment";
import { backendBase } from "constants/paths";
import { IComment } from "types/comment";
import { IFilterResponse } from "./types";

export const fetchCommentCreate = async (
  access: string,
  body: IFetchCommentRequest
): Promise<IComment> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
      Accept: "application/json",
    },
  };
  const response = await axios.post<IComment>(
    `${backendBase}api/v1/comments/`,
    body,
    config
  );

  return response.data;
};

export const fetchCommentsByReview = async (
  reviewId: number
): Promise<IFilterResponse<IComment>> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get<IFilterResponse<IComment>>(
    `${backendBase}api/v1/comments/?review_id=${reviewId}`,
    config
  );

  return response.data;
};

export const fetchCommentDelete = async (
  access: string,
  commentId: number
): Promise<number> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
      Accept: "application/json",
    },
  };
  const response = await axios.delete<number>(
    `${backendBase}api/v1/comments/${commentId}/`,
    config
  );

  return response.status;
};
