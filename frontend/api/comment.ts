import axios from "axios";
import { IFetchCommentRequest, IFetchCommentResponse } from "api/types/comment";
import { backendBase } from "constants/paths";

export const fetchCommentCreate = async (
  access: string,
  body: IFetchCommentRequest
): Promise<IFetchCommentResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
      Accept: "application/json",
    },
  };
  console.log("body: ", body);
  const response = await axios.post<IFetchCommentResponse>(
    `${backendBase}api/v1/comments/`,
    body,
    config
  );

  return response.data;
};
