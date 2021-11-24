import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { ToastContainer as AlertContainer } from "react-toastify";
import axios from "axios";
import { Cart, Layout } from "components";
import { IFetchItemToCartResponse } from "api/types/cart";
import { AlertError } from "utils/alert";

interface ICartDetailsProps {
  entities: IFetchItemToCartResponse[];
  error?: string;
}

export default function CartDetailsPage(props: ICartDetailsProps): JSX.Element {
  const { error } = props;

  useEffect(() => {
    if (error) {
      AlertError("Ошибка в карточке корзины!", error);
    }
  }, [error]);

  return (
    <Layout>
      <AlertContainer />
      <Cart />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ICartDetailsProps> =
  async ({ params }) => {
    const cartId = params.id;
    const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
    const url = encodeURI(`${baseUrl}api/v1/cart-products/?cart=${cartId}`);
    try {
      const { data } = await axios.get<IFetchItemToCartResponse[]>(url);
      return {
        props: { entities: data },
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
