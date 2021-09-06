import axios from "axios";

export const fetchOrderCreate = async (
  order: any
): Promise<any> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // const body = JSON.stringify({ user });
  const response = await axios.post<any>(
    `http://127.0.0.1:8000/api/v1/order/`,
    order,
    config
  );

  return response.data;
};
