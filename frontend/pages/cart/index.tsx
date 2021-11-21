import { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import { Cart, Layout } from "components";
import { IFetchItemToCartResponse } from "api/types/cart";

interface ICartPageProps {
  entities: IFetchItemToCartResponse[];
}

export default function CartProductsPage(props: ICartPageProps): JSX.Element {
  console.log("[CartPage][props]", props);

  return (
    <Layout>
      <Cart />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<ICartPageProps> =
  async () => {
    const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
    const url = encodeURI(`${baseUrl}api/v1/cart-products/`);

    const { data: cartResponse } = await axios.get<IFetchItemToCartResponse[]>(
      url
    );

    return {
      props: {
        entities: cartResponse,
      },
    };
  };
