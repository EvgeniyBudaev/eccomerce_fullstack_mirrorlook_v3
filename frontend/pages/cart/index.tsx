import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios from "axios";
import { Cart, Layout } from "components";
import { backendBase } from "constants/paths";
import { IFetchItemToCartResponse } from "api/types/cart";
import { AlertError } from "utils/alert";

interface ICartPageProps {
  entities: IFetchItemToCartResponse[];
  error?: string;
}

export default function CartProductsPage(props: ICartPageProps): JSX.Element {
  console.log("CartProductsPage", props.entities);
  const { error } = props;

  useEffect(() => {
    if (error) {
      AlertError("Ошибка в корзине товаров!", error);
    }
  }, [error]);

  return (
    <Layout>
      <AlertContainer />
      <Cart />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ICartPageProps> =
  async () => {
    const url = encodeURI(`${backendBase}api/v1/cart-products/`);

    try {
      const { data: cartResponse } = await axios.get<
        IFetchItemToCartResponse[]
      >(url);

      return {
        props: {
          entities: cartResponse,
        },
      };
    } catch (error) {
      return {
        props: {
          entities: [],
          error: error.message,
        },
      };
    }
  };
